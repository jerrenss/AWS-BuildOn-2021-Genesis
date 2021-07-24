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
                status = 'Initial Specialist Consultation Completed and Awaiting Lab Scans'
                break;
            case 5:
                status = 'Lab Scans Uploaded and Awaiting Specialist Follow-Up Consultation'
                break;
            case 6:
                status = 'Consultation Completed and Medication Prescribed'
                break;
            case 7:
                status = 'Status 7'
                break;
            case 8:
                status = 'Status 8'
                break;
        }
        return status;
    }
}