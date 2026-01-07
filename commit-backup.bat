@echo off
REM Git commit script - backup everything

echo ================================
echo COMMITTING TO GITHUB
echo ================================

cd C:\Users\setov\OneDrive\Documents\my-projects\ai-tools-platform

echo.
echo Step 1: Adding all files...
git add .

echo.
echo Step 2: Committing...
git commit -m "Add Supabase integration, email system, and webhook handler"

echo.
echo Step 3: Pushing to GitHub...
git push

echo.
echo ================================
echo DONE! All changes backed up!
echo ================================
pause
