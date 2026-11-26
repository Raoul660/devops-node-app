
def dockerImage

pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'raoul00/devops-node-app'
        DOCKER_CREDENTIALS_ID = 'docker-hub-credentials'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
                echo 'Source code downloaded successfully'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'node --version'
                bat 'npm --version'
                bat 'npm ci'
            }
        }

        stage('Test') {
            steps {
                bat 'node --check app.js'
                echo 'Application syntax check passed'
            }
        }

        stage('Build') {
            steps {
                bat 'npm pack --dry-run'
                echo 'Build completed successfully'
            }
        }

        stage('Docker Build') {
            steps {
                bat 'docker build -t raoul00/devops-node-app:1.0 .'
                echo 'Docker image built successfully'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("${DOCKER_IMAGE}:1.0")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', DOCKER_CREDENTIALS_ID) {
                        dockerImage.push('1.0')
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }

        failure {
            echo 'Pipeline failed. Check the console output.'
        }
    }
}
