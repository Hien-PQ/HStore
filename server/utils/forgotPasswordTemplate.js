const forgotPasswordTemplate = ({ name, otp }) => {
    return `
<div>
    <p>Dear HStore user, ${name}</p>
    <p>We received a request to reset your password for your account. Please use following OTP code to reset your password</p>   
    <div style="background:yellow; font-size:20px;padding:20px;text-align:center;font-weight : 800;">
        ${otp}
    </div>
    <p>This otp is valid for 1 hour only. Enter this otp in the HStore website to proceed with resetting your password.</p>
    <br/>
    </br>
    <p>Thank you for your belief and using our services</p>
    <p>HStore</p>
</div>
    `
}

export default forgotPasswordTemplate