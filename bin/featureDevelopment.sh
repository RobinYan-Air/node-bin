#! /bin/sh

source ${HOME}/.bash_profile
AWX_DEPLOYMENT_PATH=${__AWX_DEPLOYMENT_PATH__}

ProjectCloned () {
  printf "\n"
  read -p "Please enter the path to project airwallex-deployments:" projectPath
  if [ -f "${projectPath}/awx" ] 
  then
    echo "export __AWX_DEPLOYMENT_PATH__=\"${projectPath}\"" >> ${HOME}/.bash_profile
    source ${HOME}/.bash_profile
    echo $AWX_DEPLOYMENT_PATH
  else
    echo "'awx' could not be found at folder<${projectPath}>, please check and enter again"
    ProjectCloned
  fi
}

ProjectNotCloned () {
  echo ""
}

NoPathFound () {
  read -n1 -p "Have you cloned project airwallex-deployments: (Y/n):" clonedAnswer
  case $clonedAnswer in 
  Y | y | "") 
        ProjectCloned;;
  N | n) 
        ProjectNotCloned;; 
  *) 
      echo "\nerror choice, choose again"
      NoPathFound;;
  esac 
}

RunProxy () {
  echo 'enjoy'
  check_results=`docker ps | grep postgres`
  port=5432
  echo $check_results
  if [[ $check_results == *$port* ]]
  then
    docker stop ${check_results:0:4}
    echo "docker stopped"
  fi


  pwdPath=`pwd`
  filepath=`dirname $0`
  path=${pwdPath}/${filepath:2}
  echo $path
  # echo "Path to $(basename $0) is $(pwd)/$(dirname $0)"
  # cd ${AWX_DEPLOYMENT_PATH}
  # nohup ./awx proxy postgres, 
  osascript -e 'tell app "Terminal"
    do script "'${path}'/awxProxy.sh"
  end tell'

  echo 'Starting debug at another terminal...'
  sleep 5
  yarn featureDev
  kill -9 $(lsof -ti tcp:5432)
}

if [ ! -f "${AWX_DEPLOYMENT_PATH}/awx" ]
then
  NoPathFound
fi

RunProxy