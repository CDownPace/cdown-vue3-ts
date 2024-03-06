type TypeFeedBackCategory = {
    text: string;
    value: string;
}[]

export const FEEDBACK_CATEGORY: TypeFeedBackCategory = [
    { text: '问题', value: 'QUESTION' },
    { text: '咨询', value: 'CONSULT' },
    { text: '需求', value: 'REQUIREMENT' },
    { text: '建议', value: 'PROPOSAL' },
    { text: '其他', value: 'OTHER' },
];

export const FEEDBACK_MODULE: TypeFeedBackCategory = [
    { text: '确认合格', value: 'FLOORVALIDATION' },
    { text: '实用类型', value: 'INSTRUMENTDISINFECTION' }
]