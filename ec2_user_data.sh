#!/bin/bash

# Using ARM64 Architecture on AWS Linux 2

log(){
    echo "$(date -u) ${1}\n"
}

sendAlarm(){
    Discord Channel simple webhook
}

error_exit(){
    case "$1" in
        0) break ;;
        1) log "ERROR: Security Updates Failed\n\t${2}" ;;
        2) log "ERROR: Failed to download anaconda. ${2}" ;;
        3) log "ERROR: Anaconda SHA256 Checksum Failed ${2}" ;;
        *) log "ERROR: Unknown Error\t$1" ;;
    esac
    exit "$1"
}
# Security Updates
sudo yum list-security --security
sudo yum -y update --security
rtn_code="$?" && [ "${rtn_code}" -gt 0 ] && error_exit 1 "${rtn_code}"
sudo yum list-security --security

# Download & install Anaconda after checksum success
# TODO - GOtta download to bins folder or appropriate
wget https://repo.anaconda.com/archive/Anaconda3-2021.11-Linux-aarch64.sh
rtn_code="$?" && [ "${rtn_code}" -gt 0 ] && error_exit 2 "${rtn_code}"
sha256sum anaconda_installer_file_path
rtn_code="$?" && [ "${rtn_code}" -gt 0 ] && error_exit 3 "${rtn_code}"
bash Anaconda-3-2021-11-Linux-aarch64.sh


# Download pglet server packages
# TODO - Gotta download to bins folder
wget https://github.com/pglet/pglet/releases/download/v0.4.6/pglet-0.4.6-linux-amd64

# TODO - Git clone

# for Conda environment sharing, need the environment.yaml file on EC2
conda env create --file winstonmyers_dot_com_env.txt
conda activate winstonmyers_dot_com
conda install

# Start pglet server
~/bin/pglet server

# TODO - add git hook to run the following command prior to a commit:
# 
#       conda list --explicit > spec-file.txt

# TODO - Add ENV VARS or config file, will need:
#           - CONDA_ENV_FILE_PATH
#           - 
#           - 
#           - 
