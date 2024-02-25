# history-timeline
Open source knowledge repository of technology and computer science history

Me and thechangeseeker have a shared vision of bringing together a community-driven opensource knowledge-base to to help decisions of what language, framework, or other software to use. Knowing history allows you to know what is new and here to stay, and what is old/legacy tech and to be avoided. Also which ones old/new have Unearthed potential like Lisp machine plan 9.

Currently have notes hosted on my personal [website](https://joebulfer.com/History/Timeline) which will appear in a side panel when an event/year as a similar feature to [roadmap.sh](https://roadmap.sh/frontend). I am testing this feature with HTMX. The SVG's are built using Inkscape and can be exported to HTML.

There is a browser only approach by only storing the articles within a description attribute to the SVG added with Inkscape. A javascript event listener would swap text with whatever is in the sidepanel. In the future, a more scalable client-server model would be to store the articles as HTML files returned from the server using HTMX. 

Click [here](https://joebulfer.com/Javascript+and+Web+Design/SVG+Timeline) for further reading.
