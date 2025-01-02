---
associatedEntry: "hughes-1"
name: "Mobile Terminal Configuration Tool"
displayOrder: 1
---

**Problem**

Hughes sells mobile satellite terminals that provide internet and phone service to customers. Some customers who purchased terminals in bulk (~1000) required non-default settings. The configuration process of manually changing settings on each terminal was tedious and error-prone.

**Task**

My job was to develop a Windows 7 / 10 program that would automate the terminal configuration process.

**Result**

I designed and developed a GUI program in C# that detects which terminal model is connected and uses the available interface (<abbr title="REpresentational State Transfer">REST</abbr> <abbr title="Application Programming Interface">API</abbr> or <abbr title="File Transfer Protocol">FTP</abbr>) to copy the configuration of the *master* terminal. This can then be used to automatically configure subsequent terminals.

**Customer Feedback**

> "Btw the tool you sent us is helping a lot. Thank you so much."
>
> &mdash; <cite>Hughes Customer</cite>