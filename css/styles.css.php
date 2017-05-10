<?php

header('Content-type: text/css');

$bgcolor1 = '#597281';
$bgcolor2 = '#e9f1f4';

$mod_title_color = '#ffffff';
$borders = '#d8dee2';
$semi_negro = '#333333';
$header_title = '#495961';
?>

body {
/* 	font-family: Verdana, Tahoma, Arial; */
	font-family: sans-serif;
/*	font-family: sans-serif, Helvetica,Arial,freesans,sans-serif;	*/
	font-size: 13px;
	color: #000000;
	margin: 0px;
	background:#fff url('http://cseepr2.essex.ac.uk/images/background-header.png') 0 0 repeat-x;	
    background-color: #ffffff;	
}

h1 {
	margin: 0 0 0 0;
	font-style: normal;
	font-weight: normal;
	font-size: 1.6em;
	color: #495961;
}

h2 {
	margin: 0 0 0 0;
	font-style: normal;
	font-weight: normal;
	font-size: 1.4em;
	color: #495961;
}

a {
	color: #4183c4;
	text-decoration: none;
}

a:hover {
	text-decoration: underline;
}

.wrapper {
	margin: 0px auto 0px auto;
	padding: 0px;
	width: 967px;
}

div#header {
	margin: 0;
	min-height: 70px;
}

/* CONTENT */

div#content {
	background:url('http://cseepr2.essex.ac.uk/images/background-white.png') 0 0 no-repeat;
	padding: 20px 20px 0px 20px;
	min-height: 400px;
}

div#content p {
	text-align: justify;
}

div#content h1 {
	margin-bottom: 20px;
}

/* FOOTER */

#footer {
	margin: 25px 0 0 0;
	padding: 20px 0 15px 0;
	font-size: 12px;
	border-top: 2px solid #ddd;
	background: #f1f1f1
}

#footer p.company {
	margin: 0;
	font-weight: bold
}

#footer ul.links {
	margin: 0 0 5px 0; height: 16px
}

#footer ul.links li {
	list-style-type: none;
	float: left;
	margin: 0 10px 0 0
}

#footer ul.links li.blog {
	font-weight: bold
}

#footer ul.sosueme {
	margin: 0 0 5px 0; height: 16px
}

#footer ul.sosueme li {
	list-style-type: none;
	float: left;
	margin: 0 10px 0 0
}

#footer ul.sosueme li.main {
	font-weight: bold;
	color: #000
}

#footer ul.sosueme li a {
	color: #666
}

#footer .sponsor {
	float: right;
	white-space: nowrap;
	color: #777; line-height: 1.6
}

#footer .sponsor a {
	color: #333
}

#footer .sponsor .logo {
	float: left;
	margin-right:10px
}

/* HEADER BARS */

div#headerbar {
	float: right;
}

/* MODULE */

div.module {
	display: block;
	width: 300px;
	font-size: 1.1em;
	margin: 0 auto 0 auto;
	border: 1px solid #d8dee2;
	background-color: #e9f1f4;
}

div.module form input {
	font-size: 1.2em;
	border: 1px solid #d8dee2;
}

div.module form label {
	margin: 0 0 10px 0;
}

div.module div.title {
	display: block;
	padding: 10px;
	font-size: 1.1em;
	text-shadow: #000 0px -1px 0px;
	color: #ffffff;
	background-color: #597281;
}

div.module div.content {
	display: block;
	padding: 10px;	
	background-color: #e9f1f4;
}

/* TOP SEARCH */

.topsearch {
	float: right;
	clear: right;
	margin-top: 9px;
	width: 500px
}

.topsearch form,.topsearch ul.nav { 
	float: right;
	font-size: 1.1em;
}

.topsearch form input.button {
	display: none
}

/*.topsearch form .advanced-search {
	display: inline-block;
	*display: none;
	position: relative; top: 2px;
	width: 16px;
	height: 16px;
	text-indent: -9999px;
	background:url('../../images/modules/header/advanced_search_icon.png') 0 0 no-repeat;opacity:.2
}*/

.topsearch form .advanced-search:hover {
	opacity: .5
}

/*.topsearch .search {
	display: inline-block; width: 180px
}*/

/*.topsearch form .search input {
	font-size: 12px;
	width: 154px;
	padding: 3px 3px 3px 23px;
	border: 1px solid #ddd;
	border-top-color: #ccc;
	border-bottom-color: #eaeaea;
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
	border-radius: 3px;
	background:url('../../images/modules/home/search_icon.png') 5px 50% no-repeat #fff
}*/

.topsearch .placeholder-field label.placeholder {
	left: 25px
}

/* NAV BAR */

ul.nav {
	margin: 3px 0 0 0;
	white-space: nowrap;
	font-size:11px
}

ul.nav li {
	list-style-type: none;
	display: inline;
	margin: 0 15px 0 0
}

ul.nav.logged_out {
	padding: 8px 3px 8px 2px;
	font-size:12px;
	font-weight:bold;
	text-shadow: 1px 1px 0 #fff;
	overflow: auto
}

ul.nav.logged_out li {
	float: left;
	margin: 0;
	padding: 0 11px 0 13px;
	background: url('http://cseepr2.essex.ac.uk//images/nav-rule.png') 0 50% no-repeat
}

ul.nav.logged_out li:first-child {
	background:transparent
}

ul.nav.logged_out,.userbox {
	background: #f5f5f5; filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#fcfcfc',endColorstr='#ececec');
	background:-webkit-gradient(linear,0% 0,0% 100%,from(#fcfcfc),to(#e8e8e8));
	background:-moz-linear-gradient(270deg,#fcfcfc,#ececec);
	border-color:#eee;border:1px solid #e9e9e9;
	border-bottom-color:#f5f5f5;
	-webkit-border-radius:5px;
	-moz-border-radius:5px;
	border-radius:5px;
	-webkit-box-shadow:0 1px 1px rgba(0,0,0,0.2);
	-moz-box-shadow:0 1px 1px rgba(0,0,0,0.2);
	box-shadow:0 1px 1px rgba(0,0,0,0.2)
}

.ie7 .userbox,.ie7 ul.nav.logged_out,.ie8 .userbox,.ie8 ul.nav.logged_out {
	border-bottom-color: #ddd
}

.userbox {
	float: right;
	padding: 8px 5px 7px 10px;
	font-size: 12px;
	border-top: none;
	-webkit-border-top-left-radius: 0;
	-webkit-border-top-right-radius: 0;
	-moz-border-radius-topleft: 0;
	-moz-border-radius-topright: 0;
	border-top-left-radius: 0;
	border-top-right-radius:0
}
	
.userbox .avatarname {
	display: inline;
	padding-right: 6px;
	font-weight:bold
}

.userbox .avatarname img {
	margin-top: -3px;
	margin-right: 3px;
	vertical-align:middle;
	border: 1px solid #fff
}

#header .userbox .avatarname a {
	color:#000
}
	
ul.usernav {
	display: inline;
	margin: 0;
	font-weight: bold
}

ul.usernav li {
	list-style-type: none;
	display: inline;
	margin: 0;
	padding: 0 8px 0 9px;
	background:url('http://cseepr2.essex.ac.uk//images/nav-rule.png') 0 50% no-repeat
}

ul.usernav li a {
	text-shadow:#fff 1px 1px 0
}
	
#header a.unread_count {
	display: inline-block;
	font-size: 10px;
	margin-left: 2px;
	padding: 1px 5px;
	background: #ddd;
	color: #999;
	font-weight: bold;
	text-shadow: none;
	text-decoration: none;
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px
}
	
#header a.unread_count.new {
	background-color: #4183c4;
	color: #fff
}
	
#header a.unread_count.notifications_count{
	display:none
}
	
#header a.unread_count.new.notifications_count { 
	background-color: #666;
	display: inline-block
}

.topsearch {
	float: right;
	clear: right;
	margin-top: 9px; width: 500px
}
	
.topsearch form,.topsearch ul.nav {
	float:right
}

.topsearch form input.button{
	display:none
}

/* FORMS */

form.login_form {
	color: #000000;
}

.button.classy {
	background-color: #e3e3e3;
	border: 1px solid #d8dee2;
	font-size: 12px;
	font-weight: bold;
	color: #333333;
}

form.signup label {
	margin: 4px;
	padding-top: 10px;
}

form.signup div.hint {
	font-size: 0.8em;
	margin: 4px;
}

form.signup input.textfield {
	font-size: 1.1em;
	border: 1px solid #d8dee2;
	padding: 5px;
	width: 300px;
}

formsignup select {
	margin: 4px;
}

/* NOTIFICATIONS */

.error {
	color: #000000;
	background-color: #FFE4E1;
	border: 1px solid #FF0000;
	padding: 10px;
	margin: 0px 0 10px 0;
}

/*silver*/
form input.button {
	height: 34px;
	padding: 8px 14px 8px 14px;
	position: relative;
	top: 1px;
	margin-left: 10px;
	font-weight: bold;
	font-size: 12px;
/*	color: #333;*/
/*	text-shadow: 1px 1px 0 #fff;*/
	white-space: nowrap;
	border: none;
	overflow: visible;
/*	background: #ddd;*/
/*	filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#ffffff',endColorstr='#e1e1e1');*/
/*	background:-webkit-gradient(linear,0% 0,0% 100%,from(#fff),to(#e1e1e1));*/
/*	background:-moz-linear-gradient(-90deg,#fff,#e1e1e1);*/
	border-bottom:1px solid #ebebeb;
	-webkit-border-radius:4px;
	-moz-border-radius:4px;border-radius:4px;
	-webkit-box-shadow:0 1px 4px rgba(0,0,0,0.3);
	-moz-box-shadow:0 1px 4px rgba(0,0,0,0.3);
	box-shadow:0 1px 4px rgba(0,0,0,0.3);
	cursor: pointer;
	-webkit-font-smoothing:subpixel-antialiased!important;
	
	color:#fff;
	text-shadow:-1px -1px 0 rgba(0,0,0,0.3);
	background:#438bb1;
	filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#4794bc',endColorstr='#3a7999');background:-webkit-gradient(linear,0% 0,0% 100%,from(#4794bc),to(#3a7999));background:-moz-linear-gradient(-90deg,#4794bc,#3a7999);border-bottom-color:#438bb1;
}

/*green*/
/*form input.button:hover {
color:#fff;text-shadow:-1px -1px 0 rgba(0,0,0,0.3);background:#3e9533;filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#419b36',endColorstr='#357f2c');background:-webkit-gradient(linear,0% 0,0% 100%,from(#419b36),to(#357f2c));background:-moz-linear-gradient(-90deg,#419b36,#357f2c);border-bottom-color:#3e9533;
}*/

/* super green */
/*form input.button:hover {
color:#fff;text-shadow:-1px -1px 0 rgba(0,0,0,0.3);background:#18a609;filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#1cbe0a',endColorstr='#158f07');background:-webkit-gradient(linear,0% 0,0% 100%,from(#1cbe0a),to(#158f07));background:-moz-linear-gradient(-90deg,#1cbe0a,#158f07);border-bottom-color:#18a609;
}*/
/* blue */
/*form input.button:hover {
color:#fff;
text-shadow:-1px -1px 0 rgba(0,0,0,0.3);
background:#438bb1;
filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#4794bc',endColorstr='#3a7999');background:-webkit-gradient(linear,0% 0,0% 100%,from(#4794bc),to(#3a7999));background:-moz-linear-gradient(-90deg,#4794bc,#3a7999);border-bottom-color:#438bb1;
}
*/
table.pac {
    border: 1px solid #ce3434;
/*    width: 100%;*/
	font-size: 1em;
}

table.pac thead {
    background-color: #f0c2c2;
    color: #000000;
}

table.pac td {
    padding: 5px;
    text-align: center;
}

table.pac tr.even {
    background-color: #ffffff;
}

table.pac tr.even:hover {
    background-color: #ffff99;
}

table.pac tr.odd {
    background-color: #dbdada;
}

table.pac tr.odd:hover {
    background-color: #ffff99;
}


dl {
	
}

dl dt {
	float: left;
	width: 120px;
	display: inline;
}

dl dd {

}

