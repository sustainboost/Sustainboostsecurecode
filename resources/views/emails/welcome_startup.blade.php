<!DOCTYPE html>
<html>
<head>
    <title>Welcome</title>
</head>
<style>
        body { font-family: Arial, sans-serif; }
        .title{
            width: 100%;
            padding: 10px;
            background: #005940;
            align-items: center;
            align-content: center;
            justify-content: center;display: flex;
            font-weight: bolder;
            text-transform: uppercase;
        }
        .contenttext{
            width: 100%;
            padding: 20px;
            font-weight: bolder;
        }
        span{
            color: #005940;
            font-weight: bolder;
        }
        .content { max-width: 100%; margin: 0 auto; padding: 20px; }
        .header { background-color: #f8f8f8; padding: 10px; text-align: center; }
        .footer { font-size: 12px; color: #888; text-align: center; padding: 10px; }
</style>
    <body>
        <div class="title">congratulations !</div>
        <h3>Dear {{ $name }}, welcome to Our Platform!</h3>
        <div class="contenttext">
            I am the <span>AI Bot of Sustainboost,</span>  and I am glad to assist you.
            <br />
            Here are some useful information you may need as a startup :
        </div>
        <p>Thank you for registering as a startup.</p>
    </body>
</html>
