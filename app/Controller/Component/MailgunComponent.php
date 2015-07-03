<?php

class MailgunComponent extends Component {

  public function sendMail($from, $to, $cc, $subject, $body) {
    $ch = curl_init();

    echo $to; 
  
    curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($ch, CURLOPT_USERPWD, 'api:key-d19e568a45c27e51a9bd0bee2bcc4d98');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
    curl_setopt($ch, CURLOPT_URL, 
                'https://api.mailgun.net/v2/designforchange.us/messages');
    curl_setopt($ch, CURLOPT_POSTFIELDS, 
                  array('from' => $from,
                        'to' => $to,
                        'subject' => html_entity_decode($subject),
                        'text' => $body));
    $result = curl_exec($ch);
    curl_close($ch);

    echo json_encode($result);

    return $result;
  }

}
