pipeline {
  agent any
  environment {
    NODE_ENV = 'production'
  }
  stages {
    stage('Clone') {
      steps {
        git(
          url: 'https://github.com/pkaviyarasu16/portfolio.git',
          branch: 'prod',
          credentialsId: 'github-pat'
        )
      }
    }
    stage('Build') {
      steps {
        sh '''
          docker build -t portfolio .
        '''
      }
    }
    stage('Deploying in server') {
      steps {
        sh '''
          cd /home/ubuntu/jenkins/deployment/
          docker rm -f portfolio || true
          docker run -d -p --name portfolio 3000:3000 portfolio:latest 
    '''
      }
    }
  }
}
