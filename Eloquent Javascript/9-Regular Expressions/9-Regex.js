345.784.441-22
In this video I discuss meta-characters: what are they and what role do they play in regular expressions?
colour colour colors
This 
isFinitea
sequence of words
Hello and
Goodbye
Go go go rainbow!
807-XXX-XXXX
807.632.7209

+55(31)3541-2165 +55(31)3541-2165 +55(31)3541-2165
alisson.loura@gmail.com
alisson.loura@juno.net
alisson.loura@frigocenter.com.br
alisson.loura@teastation.co.uk
alisson.loura@who.org
alisson.loura@viver.org.br
alisson_loura@navy.mil

bad
badly
biro biro
biro biro biro  biro dsalf?

807-XXX-XXXX
800-XXX-XXXX
Julio Loura
Danny Sherrif
Keylo Treffeld

[Youtube] youtube.com [test2] ]
[Google] google.com

// \d - 0-9
// . any charactor
// * quantifier
//.* any file - "wildcard
/*
META-CHARS:
- single-chars: 
\d (digit) 0-9
\w (word) A-Z a-z 0-9 any letter or any number alphanumeric
\s any white space space, tab
\W anything that is not a word character
\S anything that is not a white space
. any character whatsoever
QUANTIFIERS:
are meta-chars that modifies the previous characters in a regex
* 0 or more
+ 1 or at least one
? 0 or 1
{min,max}
{n}
POSITION:
are meta characters that matches the position of the char in the string itself
^ beginning
$ end
\b - word boundary
CHARACTER CLASSES:
What appears in between square brackets
special characters in between brackets []
[-]
[^]
[a-z] If the dash is not the first that character means any character in between
[0-5] any number in bewteen 0 and 5
[0-3]{3} a three digit sequence
[^0-5] anything that is not 0 and 5
[^0-5]{3} anything that is not 0 and 5 with three digits
() captures a subgroup group 1 group 2 $1 : when doing a replace \1 : within a regex refering to the capture group


EXAMPLES:
\w+ : 1 or more word characters in a row
colou?rs? optional u and optional s char?
^\w+ : the beginning of the line followed by one or more word characters
\w+$ : the end of the line precedeed by at least a word character
^\w+$ : any sequence of word char followed by end of line
\b\w{4} : word boundary followed by a four word character
\b\w{4}\b : word boundary followed by a four word character followed by a word boundary
\b\w{4}\b : word boundary followed by a four or six word character followed by a word boundary
\d{3}-\d{3}-\d{4} : 807-XXX-XXXX
l[yi]nk : both link and lynk
Al{1,2}[iy]s{1,2}o[nm] : Allisson Alisson, Allysson Alysson, Alisom Alison
\+\d{2}\(\d{2}\)\d{4}-\d{4}\b : Brazilian phone number format +55(31)3541-2165
\b[A-Za-z]{4}\b : any four letter words with letters only
\b[A-Z][a-z]*\b : A word that begins with capital letter follow by any quantity of lower case letters
\b[\w]{4}\b : any four letter words with letters only
\b[\w.]+@\w+\.(com|net|co|org|mil)\.?([a-z]{2})?\b : email address
\b word boundary,[\w.]+ any aplhanumeric character or a dot at any literal quantity @, \w+ any alphanumeric character at any quantity, \. literal dot, (com|net|co|org|mil) or, \.? literal dot optional, ([a-z]{2})? any two lower case alphabetic character optional, \b word boundary
(\d{3})-(\d{3})-(\d{4}) : (group 1)-(group 2)-(group 3)
$1-XXX-XXXX : repeat what is inside group 1 added of -XXX-XXXX
Julio ,Moura :
(\w+),\s+(\w+) : Julio, Moura
$2 $1 : Julio Moura
\[.*\] : [Youtube] (youtube.com) [test2] ]
Greedy quantifier
\[.*\]
\[.*?\]  not everything, only in breckets
(\w+)\s\1 : capture, bracket, any number of chars followed by a white space, then matches it ONCE again \1 refers to group 1 within the regular expressions


FLAGS: Modify the behaviour of a regular expression
g - match all of them, not the first one - grab
i - case insensitive

*/
//programming with regex
