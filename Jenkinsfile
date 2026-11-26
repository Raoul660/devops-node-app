
pipeline {
    agent any

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
