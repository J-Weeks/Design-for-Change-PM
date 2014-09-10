<?php

App::import('Vendor', 'aws/aws-autoloader');

use Aws\S3\S3Client;
use Guzzle\Http\EntityBody;
use Aws\S3\Exception\S3Exception;

class AwsComponent extends Component {

  public function uploadFile($name, $file, $dest) {
    $s3 = S3Client::factory(array(
        'key'    => 'AKIAJ2UCWRXMR6JEFU3Q',
        'secret' => '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'
    ));
    try {
      $s3->putObject(array(
        'Bucket' => $dest,
        'Key'    => $name,
        'Body'   => fopen($file, 'r'),
        'ACL'    => 'public-read',
      ));
      return true;
    } catch (S3Exception $e) {
      return $e;
    }
  }

  public function downloadFile($bucket, $file) {
    $s3 = S3Client::factory(array(
        'key'    => 'AKIAJ2UCWRXMR6JEFU3Q',
        'secret' => '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'
    ));
    try {
      $s3->registerStreamWrapper();
      return file_get_contents('s3://' . $bucket . '/' . $file);
    } catch (S3Exception $e) {
      return false;
    }
  }

}