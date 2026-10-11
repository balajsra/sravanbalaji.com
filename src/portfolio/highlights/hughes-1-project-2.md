---
associatedEntry: "hughes-1"
name: "Location Based Services"
displayOrder: 2
---

**Problem**

Hughes mobile terminals allow customers to have internet and phone access in remote areas via a satellite connection. Some customers may find value in a GPS feature built into the terminal. In this situation, the terminal would send GPS coordinates to a server at regular intervals of time, distance, and/or velocity as configured by the end-user.

**Task**

My task was to investigate a way to minimize the data packet size of GPS coordinates and to update the terminal's software to send these data packets to a server configured by the end-user.

**Result**

This project was assigned to me after the completion of my previous project, which was intended to last the entire internship. I was able to determine that <abbr title="MQ Telemetry Transport for Sensor Networks">[MQTT-SN](https://www.oasis-open.org/committees/document.php?document_id=66091&wg_abbrev=mqtt)</abbr> was a good option as it simply sends a data packet to a server without checking for acknowledgement and the packet header is sufficiently small. I successfully implemented the packet structure and delivery to the server on the terminal software written in C. However, I was unable to get the server to recognize that it received the packet in my remaining time at Hughes. Using [Wireshark](https://www.wireshark.org), I confirmed the reception of the packet, but none of the open-source <abbr title="MQ Telemetry Transport for Sensor Networks">[MQTT-SN](https://www.oasis-open.org/committees/document.php?document_id=66091&wg_abbrev=mqtt)</abbr> brokers I used worked.