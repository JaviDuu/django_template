# django_template
repository to work on Django Admin & Dashboard Template 

steps taken to deploy the project in localhost using Ubuntu Linux:

1. Install Node.js (if necessary)
Make sure you have Node.js installed. If not, you can use the following commands:
sudo apt update
sudo apt install nodejs
sudo apt install npm 

2. Install Project Dependencies
Navigate to the root directory of your project and run the following commands:
npm install
npm run build 

3. Install yarn, Python and Virtualenv (if necessary)
sudo apt install python3
sudo apt install python3-pip
python3 -m pip install --user virtualenv 
yarn install

4. Create and Activate Virtual Environment
python3 -m virtualenv venv source venv/bin/activate 

5. Install Django
python -m pip install Django 

6. Install Additional Libraries:
pip install django-allauth django-embed-video django-crispy-forms django-multiselectfield crispy-bootstrap5 Pillow 

7. Run the Project
python manage.py runserver


steps where taken from the Official Tailwick Documentation. Extra information and steps are presented in the following link:
https://themesdesign.in/tailwick/docs/django/installation.html
