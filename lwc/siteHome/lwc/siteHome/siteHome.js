import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/SiteController.getAccounts';
import logo from '@salesforce/resourceUrl/logo';

export default class SiteHome extends LightningElement {
    logo = logo;
    @wire(getAccounts) accounts;
}
