// Global dictionary
var translation = {
     'Commits': 'Changes made',
     'commits': 'changes made',
     'Watch': 'Follow',
     'watch': 'follow',
     'Releases': 'Publications',
     'releases': 'publications',
     'repository': 'publication',
     'Repository': 'Publication',
     'branch': 'work in progress',
     'Branch': 'Work in Progress',
     'branches': 'parts in progress',
     'Branches': 'Parts in Progress',
     'Code': 'Text',
     'code': 'text',
     'pull requests': 'change requests',
     'Pull requests': 'Change requests'
     };

var replaceStrings = function(my_dict) {
   for(var word in my_dict)
  {
    $('body').safeReplace(word, my_dict[word]);

    //???
    $('input').each(function() {
      $(this).attr("placeholder","text");
      var ph_content = $(this).attr("placeholder");
      console.log(ph_content);
    //var ph_content_new = ph_content.replace(word, my_dict[word]));
    //$(this).attr("placeholder",ph_content_new);
    });

  } 
};

// Update strings on load

$(document).ready(function () {

  replaceStrings(translation);

  //Insert download buttons
	$(".only-with-full-nav").prepend ( '                \
  \
  <div id="gmSomeID" style="width:100%"><h3 style="margin-bottom: 1em;"><span class="text-emphasized">Download</span> options</h3><a href="http://www.onlineagenten.de/" class="btn btn-sm sidebar-button" aria-label="Download the contents of stefanibus/stefanibus.github.io as a zip file" title="Download the contents of stefanibus/stefanibus.github.io as a zip file" rel="nofollow"><span class="octicon octicon-cloud-download"></span> Download PDF</a><a href="http://www.onlineagenten.de/" class="btn btn-sm sidebar-button" aria-label="Download the contents of stefanibus/stefanibus.github.io as a zip file" title="Download the contents of stefanibus/stefanibus.github.io as a WORD file" rel="nofollow"><span class="octicon octicon-cloud-download"></span> Download WORD</a><a href="http://www.onlineagenten.de/" class="btn btn-sm sidebar-button" aria-label="Download the contents of stefanibus/stefanibus.github.io as a PDF file" title="Download the contents of stefanibus/stefanibus.github.io as a PDF file" rel="nofollow"><span class="octicon octicon-cloud-download"></span> Download TXT</a></p>       \
  \
      </div>                          \
  ' );
  $(".commit-title").append ( '                \
  <a style="float:right; height:27px; top:-5px; right: -5px;" href="http://www.onlineagenten.de/" class="btn btn-sm sidebar-button" aria-label="Download the contents of stefanibus/stefanibus.github.io as a zip file" title="Download the contents of stefanibus/stefanibus.github.io as a zip file" rel="nofollow"><span class="octicon octicon-cloud-download"></span> Download PDF</a> \
                                     \
  ' );

});


// MutationObserver implementation to monitor DOM changes
// select the target node
var target = document.documentElement;
 
// create an observer instance
var observer = new MutationObserver(function(mutations) {

  replaceStrings(translation);
    
});
 
// configuration of the observer:
var config = { attributes: true, childList: true, characterData: true, subtree: true };
 
// pass in the target node, as well as the observer options
observer.observe(target, config);