"use strict";(self.webpackChunkcontabo_docs=self.webpackChunkcontabo_docs||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Intro","href":"/docs/products","docId":"products"},{"type":"category","label":"Object Storage","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"What is S3 compatible Object Storage?","href":"/docs/Object-Storage/what-is","docId":"Object-Storage/what-is"},{"type":"link","label":"S3 Connection Settings","href":"/docs/Object-Storage/s3-connection-settings","docId":"Object-Storage/s3-connection-settings"},{"type":"link","label":"Supported Protocols","href":"/docs/Object-Storage/supported-protocols","docId":"Object-Storage/supported-protocols"},{"type":"link","label":"Technical Description","href":"/docs/Object-Storage/technical-description","docId":"Object-Storage/technical-description"},{"type":"category","label":"How-To\'s","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Generate Access Key and Secret Key","href":"/docs/Object-Storage/HowTo/access_secret_key","docId":"Object-Storage/HowTo/access_secret_key"},{"type":"link","label":"Mounting S3 Object Storage Files","href":"/docs/Object-Storage/HowTo/mount","docId":"Object-Storage/HowTo/mount"},{"type":"link","label":"Pre-signed URL","href":"/docs/Object-Storage/HowTo/presigned-url","docId":"Object-Storage/HowTo/presigned-url"}]},{"type":"category","label":"Tools","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"General Compatibility","href":"/docs/Object-Storage/Tools/compability","docId":"Object-Storage/Tools/compability"},{"type":"link","label":"cntb","href":"/docs/Object-Storage/Tools/cntb","docId":"Object-Storage/Tools/cntb"},{"type":"link","label":"aws cli","href":"/docs/Object-Storage/Tools/aws-cli","docId":"Object-Storage/Tools/aws-cli"},{"type":"link","label":"rclone","href":"/docs/Object-Storage/Tools/rclone","docId":"Object-Storage/Tools/rclone"},{"type":"link","label":"Cyberduck","href":"/docs/Object-Storage/Tools/cyberduck","docId":"Object-Storage/Tools/cyberduck"},{"type":"link","label":"s3fs-fuse","href":"/docs/Object-Storage/Tools/s3fs-fuse","docId":"Object-Storage/Tools/s3fs-fuse"},{"type":"link","label":"Nextcloud","href":"/docs/Object-Storage/Tools/nextcloud","docId":"Object-Storage/Tools/nextcloud"},{"type":"link","label":"s3cmd","href":"/docs/Object-Storage/Tools/s3cmd","docId":"Object-Storage/Tools/s3cmd"},{"type":"link","label":"Cloudberry Explorer","href":"/docs/Object-Storage/Tools/cloudberry-explorer","docId":"Object-Storage/Tools/cloudberry-explorer"},{"type":"link","label":"BucketAnywhere","href":"/docs/Object-Storage/Tools/bucketanywhere","docId":"Object-Storage/Tools/bucketanywhere"}]}]}]},"docs":{"Object-Storage/HowTo/access_secret_key":{"id":"Object-Storage/HowTo/access_secret_key","title":"Generate Access Key and Secret Key","description":"When Contabo is provioning the S3 compatible Object Storage S3 credentials, namely access key and secret key, are being generated in a secure manner for you. If you wish to regenerate a new secret key plese follow these steps:","sidebar":"tutorialSidebar"},"Object-Storage/HowTo/mount":{"id":"Object-Storage/HowTo/mount","title":"Mounting S3 Object Storage Files","description":"It is possible to mount S3 Object Storage to your VPS/VDS or personal computer. This way you can access the files and folders of your S3 Object Storage like a local drive. This makes usaage more convenient.","sidebar":"tutorialSidebar"},"Object-Storage/HowTo/presigned-url":{"id":"Object-Storage/HowTo/presigned-url","title":"Pre-signed URL","description":"A pre-signed URL is special S3 compliant URL in order to share an object for a specific duration for everyone who has the URL. Thus the URL contains some more query parameters holding that specific information.","sidebar":"tutorialSidebar"},"Object-Storage/s3-connection-settings":{"id":"Object-Storage/s3-connection-settings","title":"S3 Connection Settings","description":"This is a general description of S3 connection settings. In order to use S3 compatible Object Storage tools or the S3 compatible APIs you will need the followig information:","sidebar":"tutorialSidebar"},"Object-Storage/supported-protocols":{"id":"Object-Storage/supported-protocols","title":"Supported Protocols","description":"S3 compatible Object Storage has it\'s own protocol (i.e. how and in which sequence specified data formats are being exchanged) which Amazon AWS made popular in 2006 with AWS S3 Object Storage.","sidebar":"tutorialSidebar"},"Object-Storage/technical-description":{"id":"Object-Storage/technical-description","title":"Technical Description","description":"Some more technical details to Contabo\'s S3 compatible Object Storage.","sidebar":"tutorialSidebar"},"Object-Storage/Tools/aws-cli":{"id":"Object-Storage/Tools/aws-cli","title":"aws cli","description":"aws cli is a free tool from Amazon supporting also S3 compatible Object Storage. It covers most all aspects of S3 API management and supports Windows, MacOS, Linux. For buying, managing and canceling Contabo\'s S3 Object Storage please refer to cntb or Contabo API.","sidebar":"tutorialSidebar"},"Object-Storage/Tools/bucketanywhere":{"id":"Object-Storage/Tools/bucketanywhere","title":"BucketAnywhere","description":"Using BucketAnywhere is a Android App which allows to access S3 Object Storage on your cell phone.","sidebar":"tutorialSidebar"},"Object-Storage/Tools/cloudberry-explorer":{"id":"Object-Storage/Tools/cloudberry-explorer","title":"Cloudberry Explorer","description":"Cloudberry Explorer is a tool to manage files in desktop application. It runs on Windows and Mac.","sidebar":"tutorialSidebar"},"Object-Storage/Tools/cntb":{"id":"Object-Storage/Tools/cntb","title":"cntb","description":"cntb is an open source command line interface developed by Contabo to allow easy managing of the products in contabo. This includes the S3 Object Storage. Please follow the intructions to download and install cntb","sidebar":"tutorialSidebar"},"Object-Storage/Tools/compability":{"id":"Object-Storage/Tools/compability","title":"General Compatibility","description":"Contabo\'s S3 compatible Object Storage is widely compatible with Amazon\'s AWS S3 Object Storage. Not all features of AWS S3 are fully supported. E.g. logging is not supported.","sidebar":"tutorialSidebar"},"Object-Storage/Tools/cyberduck":{"id":"Object-Storage/Tools/cyberduck","title":"Cyberduck","description":"Cyberduck is a free Desktop Application for MacOS and Windows which allows to manage remote files for a wide variety of protocols including S3 compatible Object Storage.","sidebar":"tutorialSidebar"},"Object-Storage/Tools/nextcloud":{"id":"Object-Storage/Tools/nextcloud","title":"Nextcloud","description":"Nextcloud can be used provide file hosting service with browser based access but also Desktop Application or Mobile Apps. It can easily be connected to Contabo\'s Object Storage in order to store and retrieve data.","sidebar":"tutorialSidebar"},"Object-Storage/Tools/rclone":{"id":"Object-Storage/Tools/rclone","title":"rclone","description":"rclone is a free tool for manging files and folders on cloud storage on Windows, macOS, linux and FreeBSD. This includes protocols including S3 compatible Object Storage.","sidebar":"tutorialSidebar"},"Object-Storage/Tools/s3cmd":{"id":"Object-Storage/Tools/s3cmd","title":"s3cmd","description":"s3cmd is a tool to manage buckets and files an to invoke the S3 API. You can achieve similar action with aws cli. s3cmd runs on Linux and Mac.","sidebar":"tutorialSidebar"},"Object-Storage/Tools/s3fs-fuse":{"id":"Object-Storage/Tools/s3fs-fuse","title":"s3fs-fuse","description":"Using s3fs-fuse you can mount a bucket of your S3 compatible Object Storage as a folder on Linux, macOS and FreeBSD machine.","sidebar":"tutorialSidebar"},"Object-Storage/what-is":{"id":"Object-Storage/what-is","title":"What is S3 compatible Object Storage?","description":"Simple Storage Service (S3) Object Storage is a scalable storage service. This kind of service was introduced by Amazon AWS in 2006. Since then S3 compatible Object Storage is the defacto standard for Object Storage. It provides a high level of durability and high availability. Data can be accessed from anywhere via regular Internet connection. S3 Object Storage can be accessed via it\'s API or by a wide variaty of tools. Please refer to Tools.","sidebar":"tutorialSidebar"},"products":{"id":"products","title":"Intro","description":"You are interested in some more details regarding Contabo products? This is the place to be.","sidebar":"tutorialSidebar"}}}')}}]);