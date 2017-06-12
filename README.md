# AmericanCoin - in Decentralization we trust


### Introduction

AmericanCoin is a private, secure, untraceable, decentralised digital currency. 
You are your bank, you control your funds, and nobody can trace your 
transfers unless you allow them to do so.

**Privacy**: AmericanCoin uses a cryptographically sound system to allow you to send and receive funds without your 
transactions being easily revealed on the blockchain (the ledger of transactions that everyone has). This ensures that your purchases, receipts, and all transfers remain absolutely private by default.

**Security**: Using the power of a distributed peer-to-peer consensus network, every transaction on the network is 
cryptographically secured. Individual wallets have a 25 word mnemonic seed that is only displayed once, and can be written down to backup the wallet. Wallet files are encrypted with a passphrase to ensure they are useless if stolen.

**Untraceability**: By taking advantage of ring signatures, a special property of a certain type of cryptography, AmericanCoin
 is able to ensure that transactions are not only untraceable, but have an optional measure of ambiguity that ensures that transactions cannot easily be tied back to an individual user or computer.
 
 
### About AmericanCoin

This is the core implementation of AmericanCoin. It is open source and completely free to use without restrictions, 
except for those specified in the license agreement below. There are no restrictions on anyone creating an 
alternative implementation of AmericanCoin that uses the protocol and network in a compatible manner.

As with many development projects, the repository on Github is considered to be the "staging" area for the latest changes. Before changes are merged into that branch on the main repository, they are tested by individual developers in their own branches, submitted as a pull request, and then subsequently tested by contributors who focus on testing and code reviews. That having been said, the repository should be carefully considered before using it in a production environment, unless there is a patch in the repository for a particular show-stopping issue you are experiencing. It is generally a better idea to use a tagged release for stability.

**Anyone is welcome to contribute to AmericanCoin's codebase!** If you have a fix or code change, feel free to submit
 it as a 
pull request directly to the "master" branch. In cases where the change is relatively small or does not affect other parts of the codebase it may be merged in immediately by any one of the collaborators. On the other hand, if the change is particularly large or complex, it is expected that it will be discussed at length either well in advance of the pull request being submitted, or even directly on the pull request.


# INSTALLATION AND USAGE:


You can download the executables directly from our servers or you can build them using your own computer.


## LINUX


### Downloading the Core

[Download for Linux](https://firebasestorage.googleapis.com/v0/b/americancoinintro.appspot.com/o/Linux%2FAMCCore.tar.gz?alt=media&token=47157757-06a1-4c46-af07-7f3dde63eb3e)

Extract the files by typing

```
tar -xzvf AMCCore.tar.gz
```

Once files have been extracted you can run a node by typing

```
./americancoind
```

If you're experiencing issues with permissions, use **chwon** or **chmod** to assign the executables the proper 
permissions.

You can solo-mine, generate a wallet address and more by running

```
./simplewallet
```

### Building AmericanCoin

In order to create your own build, firstly you must install all dependencies

```
sudo apt-get install build-essential git cmake libboost1.55-all-dev
```

Once everything has been installed, clone this repository
```
git clone https://github.com/AmericanCoinAMC/Core
```

Now you're ready to build the AmericanCoin Core
```
cd Core

make -j
```

Keep in mind that -j will use all your CPU threads, if you are building on low end hardware use **make** instead.



If you wish to create a Service in order to run the AMC Core 24/7 we strongly suggest you start AMC's core as a 
service-daemon


```
description "American Coin daemon"

start on runlevel [2345]
stop on runlevel [!2345]

respawn
respawn limit 10 5

pre-start script
	mkdir -p path/to/your/logfile
end script

exec path/to/the/daemon/amerciancoind --log-file path/to/your/logfile --no-console
```

**NOTE**: type **./americancoind --help** to find the options available to start the daemon.



## MAC OS X

**WARNING**: This may not work with PowerPc Macs.

The core works fine in os x 10.9 and 10.11. Just extract the contents in AMCCore.zip.

You will need the boost c++ libraries so the daemon and simplewallet can run. If you dont have boost libraries install them using homebrew or MacPorts:
```
brew install boost (For homebrew)
```

or 

```
port install boost (MacPorts) 
```

For more information about how to install homebrew or MacPorts go to:

<http://docs.brew.sh/Installation.html> for Homebrew
<https://guide.macports.org/#installing> for MacPorts

Once you meet the requierements, open a terminal, go to the daemon folder (where americancoind is) and type 

~~~
./americancoind 
~~~

**NOTE**: type **./americancoind --help** to find the options available to start the daemon. 

The AMCCore comes with a CLI wallet where you can mine too. Type **./simplewallet --help** to get all the options available. You can launch this comand line app without arguments too.

If you are planning to use your Mac as a 24/7 node, read the docs about **Creating Launch Daemons and Agents** from  the apple developer site: <https://developer.apple.com/library/content/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html>

*I don't know why you would do that but, ok*

## WINDOWS

Just extract the contents inside AMCCore.zip in your selected directory, open a cmd window, go to the directory where the files were extracted and type:

 ```
 americancoin.exe 
 ```
 
 If you're going to set up your windows machine to be a 24/7 node, you should set up the executable to work as a service. Unfortunately, this executable was not meant to be a service (at least in windows) so you will have to force it to work that way if you wish. 
 
 You can use **SrvStart** to achieve this goal. Go to <http://www.rozanski.org.uk/software> and look for the utility. 
 
 **NOTE**: type **americancoind.exe --help** to find the options available to start the daemon.

The AMCCore comes with a CLI wallet where you can mine too. Type **simplewallet.exe --help** to get all the options available. You can launch this comand line app without arguments too.

When you try to create a wallet from the simplewallet app, the program will get stuck trying to generate the wallet address. We recomend you to use the GUI Wallet and create new wallets from there.
 
### Licence

See [Licence](https://github.com/AmericanCoinAMC/Core/blob/master/LICENCE.txt)
 