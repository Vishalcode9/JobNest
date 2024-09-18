pipeline{
    agent any
    environment{
        MONGO="mongodb+srv://vishhallcheeti9:B3kyia1jZnREF1ss@cluster0.9jzx1yk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    }
    stages{
        stage('Clone Git'){
            steps{
                git 'https://github.com/Vishalcode9/JobNest'
            }
        }
        stage('Building & Testing'){
            steps{
                dir('frontend'){
                    sh "npm install"
                    
                }
                dir('backend'){
                    sh "npm install"
                    
                }
            }
        }
        stage('Build Frontend Image') {
            steps {
                sh 'docker build -t frontend-image ./frontend'
            }
        }
         stage('Build Backend Image') {
            steps {
                sh 'docker build -t backend-image ./backend'
            }
        }
        stage('Push Images to DockerHub') {
            steps {

                withCredentials([usernamePassword(credentialsId: 'DockerHubCred', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
                    sh 'docker tag frontend-image vishalcode9/frontend-image:latest'
                    sh 'docker push vishalcode9/frontend-image:latest'
                    sh 'docker tag backend-image vishalcode9/backend-image:latest'
                    sh 'docker push vishalcode9/backend-image:latest'
                }          
            }
        }
        stage('Clean docker images'){
            steps{
                script{
                    sh 'docker container prune -f'
                    sh 'docker image prune -f'
                }
            }
        }
        stage('Ansible Deployment') {
            steps {
                script {
                    sh 'ansible-playbook -i inventory playbook.yml'
                }
            }
        }
    }
}
