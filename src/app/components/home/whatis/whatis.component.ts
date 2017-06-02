import { Component, OnInit } from '@angular/core';
import { appAnimations } from '../../../shared/animations/app.animations';

@Component({
    selector: 'app-whatis',
    templateUrl: './whatis.component.html',
    styleUrls: ['./whatis.component.css'],
    animations: [ appAnimations.whatisSectionAnimation()]
})
export class WhatisComponent implements OnInit {
    public activeSection: any = {};
    public sectionState: string = 'disabled';

    public sections: any[] = [
        {
            code: 'wha',
            name: 'What is AmericanCoin?',
            description: "AmericanCoin is a decentralised digital currency (cryptocurrency) " +
            "based on the CryptoNote Protocol. AMC is especially designed for developing economies " +
            "to provide people with the ability to protect their money from inflation.",
            image: 'assets/images/whatis/whatIs.png',
            icon: 'assets/images/whatis/icons/whatIs.svg',
        },
        {
            code: 'pri',
            name: 'Private & Secure',
            description: "AmericanCoin protects your financial information and ensures your activity history and" +
            " balances are private. By using a protocol which hides all your transactions, " +
            "AMC's technology guarantees the protection of your identity.",
            image: 'assets/images/whatis/privateSecure.png',
            icon: 'assets/images/whatis/icons/privateSecure.svg',
        },
        {
            code: 'acc',
            name: 'Accessible',
            description: "Quick and easy access to your money through your wallet, from anywhere in the world at any" +
            " moment of the day.",
            image: 'assets/images/whatis/accessible.png',
            icon: 'assets/images/whatis/icons/accessibility.svg',
        },
        {
            code: 'dec',
            name: 'Decentralized',
            description: "Political and economic instabilities of some countries give their citizens " +
            "little faith in their currency. Often they resort to converting their cash into a more " +
            "stable currency, such as the US dollar, due to their currency's instability. But not all " +
            "have access to those markets, with AMC that possibility exists.",
            image: 'assets/images/whatis/decentralised.png',
            icon: 'assets/images/whatis/icons/decentralized.svg',
        },
        {
            code: 'uni',
            name: 'Universal',
            description: "AMC is not bound by any banks, governments or territory. You can easily " +
            "transfer around the world and exchange to other fiat currencies.",
            image: 'assets/images/whatis/universal.png',
            icon: 'assets/images/whatis/icons/universal.svg',
        },
        {
            code: 'eas',
            name: 'Easy Mining',
            description: "Mine AMC on average PC with an egalitarian hash function designed for CPU and GPU mining.",
            image: 'assets/images/whatis/easymining.png',
            icon: 'assets/images/whatis/icons/mining.svg',
        },
        {
            code: 'ins',
            name: 'Instant Transfers',
            description: "Send and receive funds instantly with almost zero fees. Bank account and " +
            "transfer fees are transaction costs which are normally incurred when you move your money, " +
            "discouraging the realization of small operations. Due to our almost zero-fees and transaction " +
            "speeds smaller transfers are no longer a hassle.",
            image: 'assets/images/whatis/instantLowFees.png',
            icon: 'assets/images/whatis/icons/instantTrans.svg',
        },
    ];

    constructor() { }

    ngOnInit() {
        this.activateSection(this.sections[0]);
    }


    activateSection(section: any): void {
        const self = this;
        this.sectionState = 'disabled';
        setTimeout(function(){
            self.activeSection = section;
            setTimeout(function(){
                self.sectionState = 'enabled';
            }, 500);
        }, 500);
    };

}
