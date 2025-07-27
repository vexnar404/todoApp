export function getAutoPriority(dueDate) {
    const now = new Date();
    const due = new Date(dueDate);
    const diffInMs = due - now; // difference in milliseconds 
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24); // converting to days

    if (diffInDays <= 1) return 'high';
    if (diffInDays <= 3) return 'medium';
    return 'low';

}