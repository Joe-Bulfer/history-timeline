# history-timeline
Open source knowledge repository of technology and computer science history

Currently hosted on [Github Pages](https://joe-bulfer.github.io/history-timeline/)

Me and thechangeseeker have a shared vision of bringing together a community-driven opensource knowledge-base to to help decisions of what language, framework, or other software to use. Knowing history allows you to know what is new and here to stay, and what is old/legacy tech and to be avoided. Also which older ones should still be considered such as Plan 9 (Unix), HATEOS web architecture, C programming, and more.

Currently have notes hosted on my personal [website](https://joebulfer.com/History/Timeline) which will appear in a side panel when an event/year as a similar feature to [roadmap.sh](https://roadmap.sh/frontend). I have previously tested this feature with HTMX and am now looking testing with Javascript. The SVG's are built using Inkscape and can be exported to HTML.

There is a browser only approach by only storing the articles within a description attribute to the SVG added with Inkscape. A javascript event listener would swap text with whatever is in the sidepanel. In the future, a more scalable client-server model would be to store the articles as HTML files returned from the server using HTMX. 

Click [here](https://joebulfer.com/Javascript+and+Web+Design/SVG+Timeline) for further reading.

TODO
- [ ] include text in rect to be clickable, currently only the rect has the click event listener and the text gets in the way
- [ ] make side panel move out instead of being static
      
