export class StatusUtil {
    static getStatusType(number) {
        let status = '';
        switch(number) {
            case 1:
                status = 'Awaiting Confirmation of Booking'
                break;
            case 2:
                status = 'Booking Confirmed and Awaiting Initial Consultation'
                break;
            case 3:
                status = 'Referred to Specialist and Awaiting Confirmation'
                break;
            case 4: 
                status = "Specialist Booking Confirmed and Awaiting Specialist Consultation"
                break;
            case 5:
                status = 'Initial Specialist Consultation Completed and Awaiting Lab Scans'
                break;
            case 6:
                status = 'Lab Scans Uploaded and Awaiting Specialist Follow-Up Consultation'
                break;
            case 7:
                status = 'Awaiting Follow-Up Virtual Consultation'
                break;
            case 8:
                status = 'Consultation Completed and Medication Prescribed'
                break;
        }
        return status;
    }
}