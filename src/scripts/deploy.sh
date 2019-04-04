# install necessary dependency for AWS SDK and ecs-deploy
sudo add-apt-repository ppa:eugenesan/ppa -y
sudo apt-get update -y
sudo apt-get install jq python3-pip -y

# install AWS SDK
pip3 install --user requests[security] awscli -q
export PATH=$PATH:$HOME/.local/bin  

# install ecs-deploy
curl https://raw.githubusercontent.com/silinternational/ecs-deploy/master/ecs-deploy | \
  sudo tee -a /usr/bin/ecs-deploy
sudo chmod +x /usr/bin/ecs-deploy

# login AWS ECR
eval $(aws ecr get-login --region $AWS_DEFAULT_REGION  --no-include-email | sed 's|https://||')

# build the docker image and push to an image repository
docker build -t praser/interest-tax-conversor .
docker tag praser/interest-tax-conversor:latest $IMAGE_REPO_URL:latest
docker push $IMAGE_REPO_URL:latest

# update an AWS ECS service with the new image
ecs-deploy -c $CLUSTER_NAME -n $SERVICE_NAME -i $IMAGE_REPO_URL:latest
