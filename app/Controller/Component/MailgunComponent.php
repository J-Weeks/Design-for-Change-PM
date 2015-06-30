<?php

class MailgunComponent extends Component {

  public function sendMail($from, $to, $cc, $subject, $body) {
    //$mgClient = new Mailgun('key-d19e568a45c27e51a9bd0bee2bcc4d98');
    //$domain = 'designforchange.us';
    /*
    curl -s --user 'api:key-d19e568a45c27e51a9bd0bee2bcc4d98' \
        https://api.mailgun.net/v3/designforchange.us/messages \
        -F from='Excited User <mailgun@designforchange.us>' \
        -F to=admin@designforchange.us \
        -F to=bar@example.com \
        -F subject='Hello' \
        -F text='Testing some Mailgun awesomness!'
*/
    try {
      return $mgClient->sendMessage("$domain",
                                    array('from'    => $from,
                                          'to'      => $to,
                                          'cc'      => $cc,
                                          'subject' => html_entity_decode($subject),
                                          'text'    => $body));
    } catch(Exception $e) {
      echo $e;
      return false;
    }
  }

}