export class UpdateParametersCommand {
    id: string;
    appointmentReminderDuration:number;
    agendaNoteReminder:number;
    days:string;
    smsCompany:string;
    cashAccount:string;
    creditCardCashAccount:string ;
    bankTransferCashAccount:string ;
    whatsappTemplate:string ;
    customerWelcomeTemplate: string ;
    automaticAppointmentReminderMessageTemplate: string ;
    isOtoCustomerWelcomeMessage: boolean ;
    displayVetNo: boolean;
    autoSms: boolean;
    isAnimalsBreeds: boolean;
    isFirstInspection : boolean;
    appointmentBeginDate: string;
    appointmentEndDate: string;
    isExaminationAmuntZero: boolean;

    constructor(
        id: string,
        appointmentReminderDuration:number,
        agendaNoteReminder:number,
        days:string,
        smsCompany:string,
        cashAccount:string,
        creditCardCashAccount:string,
        bankTransferCashAccount:string,
        whatsappTemplate:string,
        customerWelcomeTemplate: string,
        automaticAppointmentReminderMessageTemplate: string,
        isOtoCustomerWelcomeMessage: boolean,
        displayVetNo: boolean,
        autoSms: boolean,
        isAnimalsBreeds: boolean,
        isFirstInspection: boolean,
        appointmentBeginDate: string,
        appointmentEndDate: string,
        isExaminationAmuntZero: boolean
        ) {
        this.id = id;
        this.appointmentReminderDuration = appointmentReminderDuration;
        this.agendaNoteReminder = agendaNoteReminder;
        this.days = days;
        this.smsCompany = smsCompany;
        this.cashAccount = cashAccount;
        this.creditCardCashAccount = creditCardCashAccount;
        this.bankTransferCashAccount = bankTransferCashAccount;
        this.whatsappTemplate = whatsappTemplate;
        this.customerWelcomeTemplate = customerWelcomeTemplate;
        this.automaticAppointmentReminderMessageTemplate = automaticAppointmentReminderMessageTemplate;
        this.isOtoCustomerWelcomeMessage = isOtoCustomerWelcomeMessage;
        this.displayVetNo = displayVetNo;
        this.autoSms = autoSms;
        this.isAnimalsBreeds = isAnimalsBreeds;
        this.isFirstInspection = isFirstInspection;
        this.appointmentBeginDate = appointmentBeginDate;
        this.appointmentEndDate = appointmentEndDate;
        this.isExaminationAmuntZero = isExaminationAmuntZero;
    }
}