import validator from 'validator';
var ValidationRules =[
    {   field: 'firstName',
    method: validator.isEmpty,
    validWhen: false,
    message: 'This field is required'
},
{
    field: 'lastName',
        method: validator.isEmpty,
    validWhen: false,
    message: 'This field is required'
},
{
    field: 'emailAddress',
        method: validator.isEmail,
    validWhen: true,
    message: 'Must be a valid email'
},
{
    field: 'city',
        method: validator.isEmpty,
    validWhen: false,
    message: 'This field is required'
},
{
    field: 'state',
        method: validator.isEmpty,
    validWhen: false,
    message: 'This field is required'
},
{
    field: 'address1',
        method: validator.isEmpty,
    validWhen: false,
    message: 'This field is required'
},
{
    field: 'address2',
        method: validator.isEmpty,
    validWhen: false,
    message: 'This field is required'
},
{
    field: 'creditCardNumber',
    method: validator.isCreditCard,
    validWhen: true,
    message: 'Must be a valid credit card'
},
{
    field: 'expirationDate',
        method: validator.isEmpty,
    validWhen: false,
    message: 'This field is required'
},
{
    field: 'securityCode',
        method: validator.isEmpty,
    validWhen: false,
    message: 'This field is required'
},
{
    field: 'password',
        method: validator.isEmpty,
    validWhen: false,
    message: 'This field is required'
}
];

export default ValidationRules;
