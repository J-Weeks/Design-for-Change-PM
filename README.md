Design-for-Change-PM
====================


<IfModule mod_rewrite.c>
        RewriteEngine On
        RewriteRule ^(.*)$ /dfcusa-pm/$1 [NC]
</IfModule>

<FilesMatch "\.(ttf|ttc|otf|eot|woff|font.css)$">
  <IfModule mod_headers.c>
    Header set Access-Control-Allow-Origin "*"
  </IfModule>
</FilesMatch>

AddType application/vnd.ms-fontobject .eot
AddType font/ttf .ttf
AddType font/otf .otf
AddType application/x-font-woff .woff
