#! /bin/sh

AWX_DEPLOYMENT_PATH=${__AWX_DEPLOYMENT_PATH__}


echo ${AWX_DEPLOYMENT_PATH}
cd ${AWX_DEPLOYMENT_PATH}

execProxy () {
  res=`./awx proxy postgres,`
  pull='Pull from'

  if [[ $res == *$pull* ]]
  then
    echo 'Restart'
    execProxy
  fi
}
execProxy