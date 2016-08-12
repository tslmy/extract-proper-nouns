This script allows to extract proper nouns from an English text with NTLK.


Install dependencies
--------------------
* Install NLTK according your OS
  * `pkg install nltk` on FreeBSD
  * `pip install nltk` on macOS
* Install numpy
  - `pkg install py27-numpy` on FreeBSD
  - `pip install numpy` on macOS
* Download the needed NLTK resources with `ntlk.download()` in a python:
  - maxent_treebank_pos_tagger
  - punkt
  - averaged_perceptron_tagger


Source text
-----------
You need a copy of the text you want to extract from as plain text.


Source English word list
------------------------
The expected format is a list in lowercase, each line a substantive word.
Filename should be wordsEn.txt or modified in eliminate-common-nouns script.

Such file is available at http://www-01.sil.org/linguistics/wordlists/english/


Usage
-----
```
./extract-proper-nouns source.txt | sort | uniq > proper-nouns.txt
./eliminate-common-nouns proper-nouns.txt > uncommon_proper-nouns.txt
./research-with-wikipedia uncommon_proper-nouns.txt > reference-list.txt
```


Acknowledgment
--------------

Thank you to Rama for NLTK suggestion and some brief guidance.

The original code idea is from Alvations, and could be seen at http://stackoverflow.com/a/17672491/1930997.
