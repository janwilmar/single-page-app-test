# single-page-app-test
Coders for Hire recruitment test. This test project uses Meteor JavaScript web framework.

## Getting Started

Clone or download this repo.

### Prerequisites

0.) [NodeJs](https://nodejs.org/en/)

1.) [Chocolatey](https://chocolatey.org/install#requirements)

2.) [Meteor](https://www.meteor.com/)

### Installing

Installing Chocolatey: 

You can go to this [link](https://chocolatey.org/install#requirements) and follow the instructions.
Or follow what I did instead:
1.) Open cmd as an administrator.
2.) Copy and paste this command

    @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

3.) Wait... and viola! You now have Chocolatey.

To test Choco, run this in your command line:

    choco

It'll show you the version of your Chocolatey.

Assuming you already did clone this repo, run the following commands:

    meteor npm install
    
To install the needed dependencies.
    
### Running

Just run this:
    
    meteor
    
Once done, it can be accessed through http://localhost:3000