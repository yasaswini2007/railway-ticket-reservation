pipeline {
agent any
stages {
stage('Checkout') {
steps {
echo 'Downloading Railway Reservation source code'
checkout scm
}
}
stage('Build') {
steps {
echo 'Starting application build'
bat '''
if not exist index.html exit /b 1
if not exist style.css exit /b 1
if not exist script.js exit /b 1
'''
echo 'Application files verified successfully'
}
}
stage('Test') {
steps {
echo 'Testing application files'
bat '''
findstr /i "<html" index.html
if errorlevel 1 exit /b 1
findstr /i "bookingForm" index.html
if errorlevel 1 exit /b 1
findstr /i "addEventListener" script.js
if errorlevel 1 exit /b 1
'''
echo 'All basic validation tests passed'
}
}
stage('Package') {
steps {
echo 'Creating application package'
bat '''
if exist railway-reservation.zip del railway-reservation.zip
powershell -NoProfile -Command "Compress-Archive -Path index.html,style.css,script.js -DestinationPath railway-reservation.zip"
'''
}
}
}
post {
success {
echo 'Railway Reservation Build Successful!'
}
failure {
echo 'Railway Reservation Build Failed!'
}
}
}