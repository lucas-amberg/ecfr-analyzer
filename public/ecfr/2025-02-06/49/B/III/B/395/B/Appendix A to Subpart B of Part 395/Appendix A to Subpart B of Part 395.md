# Appendix A to Subpart B of Part 395—Functional Specifications for All Electronic Logging Devices (ELDs)


(a) This appendix specifies the minimal requirements for an electronic logging device (ELD) necessary for an ELD provider to build and certify that its technology is compliant with this appendix.


The ELD discussed in this appendix is an electronic module capable of recording the electronic records of duty status for CMV drivers using the unit in a driving environment within a CMV and meets the compliance requirements in this appendix.


Users of ELDs are:


(a) CMV drivers employed by a motor carrier; and


(b) Support personnel who have been authorized by the motor carrier to:


(1) Create, remove, and manage user accounts;


(2) Configure allowed ELD parameters; and


(3) Access, review, and manage drivers' ELD records on behalf of the motor carrier.


An ELD may be implemented as a stand-alone technology or within another electronic module. It may be installed in a CMV or may be implemented on a handheld unit that may be moved from vehicle to vehicle. The functional requirements are the same for all types of system architecture that may be used in implementing the ELD functionality.


(a) An ELD is integrally synchronized with the engine of the CMV such that driving time can be automatically recorded for the driver operating the CMV and using the ELD.


(b) An ELD allows for manual inputs from the driver and the motor carrier support personnel and automatically captures date and time, vehicle position, and vehicle operational parameters.


(c) An ELD records a driver's electronic RODS and other supporting events with the required data elements specified in this appendix and retains data to support the performance requirements specified in this appendix.


(d) An ELD generates a standard data file output and transfers it to an authorized safety official upon request.


(e) This appendix specifies minimally required data elements that must be part of an event record such that a standard ELD output file can be produced by all compliant ELDs.


(f) Figure 1 provides a visual layout of how this appendix is generally organized to further explain the required sub-functions of an ELD.


(a) Section 2 lists the abbreviations used throughout this appendix.


(b) Section 3 provides definitions for terms and notations used in this document.


(c) Section 4 lists functional requirements for an ELD. More specifically, section 4.1 describes the security requirements for account management within an ELD system and introduces the term “Unidentified Driver” account. Section 4.2 explains internal engine synchronization requirements and its applicability when used in recording a driver's record of duty status in CMVs. Section 4.3 describes the inputs of an ELD which includes automatically measured signals by the ELD as covered in section 4.3.1, and manual entries by the authenticated driver as covered in section 4.3.2 and by the motor carrier as covered in section 4.3.3. The ELD requirements for internal processing and tracking of information flow are described in section 4.4, which includes conditions for and prohibitions against automatic setting of duty-status in section 4.4.1, required geo-location and date and time conversion functions in sections 4.4.2 and 4.4.3, respectively, use of event attributes for tracking of edit and entry history in section 4.4.4, and the use of data check functions in the recording of ELD logs in section 4.4.5 as standard security measures for all ELDs. Section 4.5 describes the events an ELD must record and the data elements each type of event must include. Section 4.6 introduces device self-monitoring requirements and standardizes the minimal set of malfunctions and data diagnostic events an ELD must be able to detect. Section 4.7 introduces technical functions that are intended to guard a driver against harassment and introduces a privacy preserving provision when a driver operates a CMV for personal purposes. Section 4.8 explains ELD outputs, which are the information displayed to a user and the standard data output file an ELD must produce. Sections 4.9 and 4.10, respectively, describe the data reporting requirements and the communications protocols.


(d) Section 5 describes the ELD certification and registration process.


(e) Section 6 lists the cited references throughout this appendix.


(f) Section 7 provides a data elements dictionary referencing each data element identified in this appendix.


A vehicle databus refers to an internal communications network that interconnects components inside a vehicle and facilitates exchange of data between subsystems typically using serial or control area network protocols.


An ELD event refers to a discrete instance in time when the ELD records data with the data elements specified in this appendix. The discrete ELD events relate to the driver's duty status and ELD's operational integrity. They are either triggered by input from the driver (driver's duty status changes, driver's login/logout activity, etc.) or triggered by the ELD's internal monitoring functions (ELD malfunction detection, data diagnostics detection, intermediate logs, etc.). ELD events and required data elements for each type of ELD event are described in detail in section 4.5.1 of this appendix.


As specified in further detail in section 4.3.3.1.2 of this appendix, an ELD must allow a motor carrier to configure an ELD for a driver who may be exempt from the use of the ELD. An example of an exempt driver would be a driver operating under the short-haul exemption in § 395.1(e) of this part (100 air-mile radius driver and non-CDL 150-air mile radius driver). Even though exempt drivers do not have to use an ELD, in operations when an ELD equipped CMV may be shared between exempt and non-exempt drivers, motor carriers can use this allowed configuration to avoid issues with unidentified driver data diagnostics errors.


Geo-location is the conversion of a position measurement in latitude/longitude coordinates into a description of the distance and direction to a recognizable nearby location name. Geo-location information is used on an ELD's display or printout.


(a) An ignition power cycle refers to the engine's power status changing from “on to off” or “off to on”, typically with the driver controlling engine power status by switching the ignition key positions.


(b) An ignition power on cycle refers to the engine power sequence changing from “off to on and then off”. This refers to a continuous period when a CMV's engine is powered.


(c) An ignition power off cycle refers to the engine power sequence changing from “on to off and then on”. This refers to a continuous period when a CMV's engine is not powered.


“Unidentified Driver” refers to the operation of a CMV featuring an ELD without an authenticated driver logging in the system. Functional specifications in this appendix require an ELD to automatically capture driving time under such conditions and attribute such records to the unique “Unidentified Driver account,” as specified in section 4.1.5 of this appendix, until the motor carrier and the driver review the records and they are assigned to the true and correct owner, as described in § 395.32 of this part.


Throughout this appendix the following notations are used when data elements are referenced.


(a) < . > indicates a parameter an ELD must track. For example refers to the unique <ELD username> or identifier specified during the creation of an ELD account with the requirements set forth in section 7.18 of this appendix.


(b) {* .*} indicates which of multiple values of a parameter is being referenced. For example <ELD username {*for the co-driver*}> refers specifically to the ELD username for the co-driver.


(c) <CR> indicates a carriage return or new line or end of the current line. This notation is used in section 4.8.2 of this appendix, which describes the standard ELD output file.


An ELD must support a user account structure that separates drivers and motor carrier's support personnel (*i.e.* non-drivers).


(a) Each user of the ELD must have a valid active account on the ELD with a unique identifier assigned by the motor carrier.


(b) Each driver account must require the entry of the driver's license number and the State or jurisdiction that issued the driver's license into the ELD during the account creation process. The driver account must securely store this information on the ELD.


(c) An ELD must not allow creation of more than one driver account associated with a driver's license for a given motor carrier.


(d) A driver account must not have administrative rights to create new accounts on the ELD.


(e) A support personnel account must not allow recording of ELD data for its account holder.


(f) An ELD must reserve a unique driver account for recording events during non-authenticated operation of a CMV. This appendix will refer to this account as the “unidentified driver account.”


(a) An ELD must provide secure access to data recorded and stored on the system by requiring user authentication during system login.


(b) Driver accounts must only have access to data associated with that driver, protecting the authenticity and confidentiality of the collected information.


(a) An ELD must be capable of separately recording and retaining ELD data for each individual driver using the ELD.


(b) An ELD must provide for and require concurrent authentication for team drivers.


(c) If more than one ELD unit is used to record a driver's electronic records within a motor carrier's operation, the ELD in the vehicle the driver is operating most recently must be able to produce a complete ELD report for that driver, on demand, for the current 24-hour period and the previous 7 consecutive days.


(a) An ELD must associate all non-authenticated operation of a CMV with a single ELD account labeled unidentified driver.


(b) If a driver does not log onto the ELD, as soon as the vehicle is in motion, the ELD must:


(1) Provide a visual or visual and audible warning reminding the driver to stop and log in to the ELD;


(2) Record accumulated driving and on-duty, not-driving, time in accordance with the ELD defaults described in section 4.4.1 of this appendix under the unidentified driver profile; and


(3) Not allow entry of any information into the ELD other than a response to the login prompt.


(a) An ELD must be integrally synchronized with the engine of the CMV. Engine synchronization for purposes of ELD compliance means the monitoring of the vehicle's engine operation to automatically capture the engine's power status, vehicle's motion status, miles driven value, and engine hours value when the CMV's engine is powered.


(b) An ELD used while operating a CMV that is a model year 2000 or later model year, as indicated by the vehicle identification number (VIN), that has an engine electronic control module (ECM) must establish a link to the engine ECM when the CMV's engine is powered and receive automatically the engine's power status, vehicle's motion status, miles driven value, and engine hours value through the serial or Control Area Network communication protocols supported by the engine ECM or the vehicle's databus. If the vehicle does not have an ECM, an ELD may use alternative sources to obtain or estimate these vehicle parameters with the listed accuracy requirements under section 4.3.1 of this appendix.


An ELD must be powered and become fully functional within 1 minute of the vehicle's engine receiving power and must remain powered for as long as the vehicle's engine stays powered.


(a) An ELD must automatically determine whether a CMV is in motion or stopped by comparing the vehicle speed information with respect to a set speed threshold as follows:


(1) Once the vehicle speed exceeds the set speed threshold, it must be considered in motion.


(2) Once in motion, the vehicle must be considered in motion until its speed falls to 0 miles per hour and stays at 0 miles per hour for 3 consecutive seconds. Then, the vehicle will be considered stopped.


(3) An ELD's set speed threshold for determination of the in-motion state for the purpose of this section must not be configurable to greater than 5 miles per hour.


(b) If an ELD is required to have a link to the vehicle's engine ECM, vehicle speed information must be acquired from the engine ECM or the vehicle's databus. Otherwise, vehicle speed information must be acquired using an independent source apart from the positioning services described under section 4.3.1.6 of this appendix and must be accurate within ±3 miles per hour of the CMV's true ground speed for purposes of determining the in-motion state for the CMV.


(a) An ELD must monitor vehicle miles as accumulated by a CMV over the course of an ignition power on cycle (accumulated vehicle miles) and over the course of CMV's operation (total vehicle miles). Vehicle miles information must use or must be converted to units of whole miles.


(b) If the ELD is required to have a link to the vehicle's engine ECM as specified in section 4.2 of this appendix:


(1) The ELD must monitor the odometer message broadcast on the engine ECM or the vehicle's databus and use it to log total vehicle miles information; and


(2) The ELD must use the odometer message to determine accumulated vehicle miles since engine's last power on instance.


(c) If the ELD is not required to have a link to the vehicle's engine ECM as specified in section 4.2 of this appendix, the accumulated vehicle miles indication must be obtained or estimated from a source that is accurate to within ±10% of miles accumulated by the CMV over a 24-hour period as indicated on the vehicle's odometer display.


(a) An ELD must monitor engine hours of the CMV over the course of an ignition power on cycle (elapsed engine hours) and over the course of the total engine hours of the CMV's operation. Engine hours must use or must be converted to hours in intervals of a tenth of an hour.


(b) If an ELD is required to have a link to the vehicle's engine ECM, the ELD must monitor the total engine hours message broadcast on the engine ECM or the vehicle's databus and use it to log total engine hours information. Otherwise, engine hours must be obtained or estimated from a source that monitors the ignition power of the CMV and must be accurate within ±0.1 hour of the engine's total operation within a given ignition power on cycle.


(a) The ELD must obtain and record the date and time information automatically without allowing any external input or interference from a motor carrier, driver, or any other person.


(b) The ELD time must be synchronized to Coordinated Universal Time (UCT) and the absolute deviation from UCT must not exceed 10 minutes at any point in time.


(a) An ELD must determine automatically the position of the CMV in standard latitude/longitude coordinates with the accuracy and availability requirements of this section.


(b) The ELD must obtain and record this information without allowing any external input or interference from a motor carrier, driver, or any other person.


(c) CMV position measurement must be accurate to ±0.5 mile of absolute position of the CMV when an ELD measures a valid latitude/longitude coordinate value.


(d) Position information must be obtained in or converted to standard signed latitude and longitude values and must be expressed as decimal degrees to hundreds of a degree precision (*i.e.,* a decimal point and two decimal places).


(e) Measurement accuracy combined with the reporting precision requirement implies that position reporting accuracy will be on the order of ±1mile of absolute position of the CMV during the course of a CMV's commercial operation.


(f) During periods of a driver's indication of personal use of the CMV, the measurement reporting precision requirement is reduced to tenths of a degree (*i.e.,* a decimal point and single decimal place) as further specified in section 4.7.3 of this appendix.


(g) An ELD must be able to acquire a valid position measurement at least once every 5 miles of driving; however, the ELD records CMV location information only during ELD events as specified in section 4.5.1 of this appendix.


The vehicle identification number (VIN) for the power unit of a CMV must be automatically obtained and recorded if it is available on the vehicle databus.


(a) An ELD must prompt the driver to input information into the ELD only when the CMV is stationary and driver's duty status is not on-duty driving, except for the condition specified in section 4.4.1.2 of this appendix.


(b) If the driver's duty status is driving, an ELD must only allow the driver who is operating the CMV to change the driver's duty status to another duty status.


(c) A stopped vehicle must maintain zero (0) miles per hour speed to be considered stationary for purposes of information entry into an ELD.


(d) An ELD must allow an authenticated co-driver who is not driving, but who has logged into the ELD prior to the vehicle being in motion, to make entries over his or her own records when the vehicle is in motion. The ELD must not allow co-drivers to switch driving roles when the vehicle is in motion.


(a) An ELD must provide a means for a driver to enter information pertaining to the driver's ELD records manually, *e.g.,* CMV power unit number, as specified in section 7.4 of this appendix; trailer number(s), as specified in section 7.42; and shipping document number, as specified in section 7.39.


(b) If the motor carrier populates these fields automatically, the ELD must provide means for the driver to review such information and make corrections as necessary.


(a) An ELD must provide a means for the authenticated driver to select a driver's duty status.


(b) The ELD must use the ELD duty status categories listed in Table 1 of this appendix.


(a) An ELD must provide the means for a driver to indicate the beginning and end of a period when the driver may use the CMV for authorized personal use or for performing yard moves. The ELD must acquire this status in a standard format from the category list in Table 2 of this appendix. This list must be supported independent of the duty status categories described in section 4.3.2.2.1 of this appendix.


(b) An ELD must allow a driver to select only categories that a motor carrier enables by configuration for that driver, as described in section 4.3.3.1.1 of this appendix.


(c) An ELD must only allow one category to be selected at any given time and use the latest selection by the driver.


(d) The ELD must prompt the driver to enter an annotation upon selection of a category from Table 2 of this appendix and record the driver's entry.


(e) A driver's indication of special driving situation must reset to none if the ELD or CMV's engine goes through a power off cycle (ELD or CMV's engine turns off and then on) except if the driver has indicated authorized personal use of CMV. If the driver has indicated authorized personal use of the CMV, the ELD must require confirmation of continuation of the authorized personal use of CMV condition by the driver. If not confirmed by the driver and the vehicle is in motion, the ELD must default to none.


(a) An ELD must include a function whereby a driver can certify the driver's records at the end of a 24-hour period.


(1) This function, when selected, must display a statement that reads “I hereby certify that my data entries and my record of duty status for this 24-hour period are true and correct.”


(2) An ELD must prompt the driver to select “Agree” or “Not ready.” An ELD must record the driver's affirmative selection of “Agree” as an event.


(b) An ELD must only allow the authenticated driver to certify records associated with that driver.


(c) If any edits are necessary after the driver certifies the records for a given 24-hour period, the ELD must require and prompt the driver to re-certify the updated records.


(d) If there are any past records on the ELD (excluding the current 24-hour period) that require certification or re-certification by the driver, the ELD must indicate the required driver action on the ELD's display and prompt the driver to take the necessary action during the login and logout processes.


(a) An ELD must provide a standardized single-step driver interface for compilation of driver's ELD records and initiation of the data transfer to authorized safety officials when requested during a roadside inspection.


(b) The ELD must input the data transfer request from the driver, require confirmation, present and request selection of the supported data transfer options by the ELD, and prompt for entry of the output file comment as specified in section 4.3.2.5 of this appendix. Upon confirmation, the ELD must generate the compliant output file and perform the data transfer.


(c) The supported single-step data transfer initiation mechanism (such as a switch or an icon on a touch-screen display) must be clearly marked and visible to the driver when the vehicle is stopped.


An ELD must accommodate the entry of an output file comment up to 60 characters long. If an authorized safety official provides a key phrase or code during an inspection to be included in the output file comment, it must be entered and embedded in the electronic ELD records in the exchanged dataset as specified in section 4.8.2.1.1 of this appendix. The default value for the output file comment must be blank. This output file comment must be used only for the creation of the related data files for the intended time, place, and ELD user.


(a) An ELD must allow a driver to add annotations in text format to recorded, entered, or edited ELD events.


(b) The ELD must require annotations to be 4 characters or longer, including embedded spaces if driver annotation is required and driver is prompted by the ELD.


(a) An ELD must allow manual entry of a CMV's location by the driver in text format in support of the driver edit requirements described in section 4.3.2.8 of this appendix.


(b) The driver's manual location entry must be available as an option to a driver only when prompted by the ELD under allowed conditions as described in section 4.6.1.4 of this appendix.


(c) A manual location entry must show “M” in the latitude/longitude coordinates fields in ELD records.


(a) An ELD must provide a mechanism for a driver to review, edit, and annotate the driver's ELD records when a notation of errors or omissions is necessary or enter the driver's missing ELD records subject to the requirements specified in this section.


(b) An ELD must not permit alteration or erasure of the original information collected concerning the driver's ELD records or alteration of the source data streams used to provide that information.


(a) If a driver edits or annotates an ELD record or enters missing information, the act must not overwrite the original record.


(b) The ELD must use the process outlined in section 4.4.4.2 of this appendix to configure required event attributes to track the edit history of records.


(c) Driver edits must be accompanied by an annotation. The ELD must prompt the driver to annotate edits.


(a) An ELD must not allow or require the editing or manual entry of records with the following event types, as described in section 7.25 of this appendix:


(b) An ELD must not allow automatically recorded driving time to be shortened or the ELD username associated with an ELD record to be edited or reassigned, except under the following circumstances:


(1) *Assignment of Unidentified Driver records.* ELD events recorded under the “Unidentified Driver” profile may be edited and assigned to the driver associated with the record; and


(2) *Correction of errors with team drivers.* In the case of team drivers, the driver account associated with the driving time records may be edited and reassigned between the team drivers if there was a mistake resulting in a mismatch between the actual driver and the driver recorded by the ELD and if both team drivers were respectively indicated in each other's records as a co-driver. The ELD must require each co-driver to confirm the change for the corrective action to take effect.


An ELD must restrict availability of motor carrier entries outlined in this section only to authenticated “support personnel” account holders.


If an ELD or a technology that includes an ELD function offers configuration options to the motor carrier or the driver that are not otherwise addressed or prohibited in this appendix, the configuration options must not affect the ELD's compliance with the requirements of this rule for each configuration setting of the ELD.


(a) An ELD must allow a motor carrier to unilaterally configure the availability of each of the three categories listed on Table 2 of this appendix that the motor carrier chooses to authorize for each of its drivers. By default, none of these categories must be available to a new driver account without the motor carrier proactively configuring their availability.


(b) A motor carrier may change the configuration for the availability of each category for each of its drivers. Changes to the configuration setting must be recorded on the ELD and communicated to the applicable authenticated driver during the ELD login process.


(a) An ELD must provide the motor carrier the ability to configure a driver account exempt from use of an ELD.


(b) The ELD must default the setting of this configuration option for each new driver account created on an ELD to “no exemption.”


(c) An exemption must be proactively configured for an applicable driver account by the motor carrier. The ELD must prompt the motor carrier to annotate the record and provide an explanation for the configuration of exemption.


(d) If a motor carrier configures a driver account as exempt


(1) The ELD must present the configured indication that is in effect for that driver during the ELD login and logout processes.


(2) The ELD must continue to record ELD driving time but suspend detection of missing data elements data diagnostic event for the driver described in section 4.6.1.5 of this appendix and data transfer compliance monitoring function described in section 4.6.1.7 when such driver is authenticated on the ELD.


(a) An ELD may allow the motor carrier (via a monitoring algorithm or support personnel) to screen, review, and request corrective edits to the driver's certified (as described in section 4.3.2.3 of this appendix) and submitted records through the ELD system electronically. If this function is implemented by the ELD, the ELD must also support functions for the driver to see and review the requested edits.


(b) Edits requested by anyone or any system other than the driver must require the driver's electronic confirmation or rejection.


An ELD must automatically record driving time when the vehicle is in motion by setting duty status to driving for the driver unless, before the vehicle is in motion, the driver:


(a) Sets the duty status to off-duty and indicates personal use of CMV, in which case duty status must remain off-duty until driver's indication of the driving condition ends; or


(b) Sets the duty status to on-duty not driving and indicates yard moves, in which case duty status must remain on-duty not driving until driver's indication of the driving condition ends.


When the duty status is set to driving, and the CMV has not been in-motion for 5 consecutive minutes, the ELD must prompt the driver to confirm continued driving status or enter the proper duty status. If the driver does not respond to the ELD prompt within 1-minute after receiving the prompt, the ELD must automatically switch the duty status to on-duty not driving. The time thresholds for purposes of this section must not be configurable.


An ELD must not feature any other automatic records of duty setting mechanism than those described in sections 4.4.1.1 and 4.4.1.2 of this appendix. Duty status changes that are not initiated by the driver, including duty status alteration recommendations by motor carrier support personnel or a software algorithm, are subject to motor carrier edit requirements in section 4.3.3.1.3.


(a) For each change in duty status, the ELD must convert automatically captured vehicle position in latitude/longitude coordinates into geo-location information, indicating approximate distance and direction to an identifiable location corresponding to the name of a nearby city, town, or village, with a State abbreviation.


(b) Geo-location information must be derived from a database that contains all cities, towns, and villages with a population of 5,000 or greater and listed in ANSI INCITS 446-2008 (R2013) (incorporated by reference, see § 395.38).


(c) An ELD's viewable outputs (such as printouts or display) must feature geo-location information as place names in text format.


(a) An ELD must have the capability to convert and track date and time captured in UTC standard to the time standard in effect at driver's home terminal, taking the daylight savings time changes into account by using the parameter “Time Zone Offset from UTC” as specified in section 7.41 of this appendix.


(b) An ELD must record the driver's record of duty status using the time standard in effect at the driver's home terminal for a 24-hour period beginning with the time specified by the motor carrier for that driver's home terminal.


(c) The data element “Time Zone Offset from UTC” must be included in the “Driver's Certification of Own Records” events as specified in section 4.5.1.4 of this appendix.


This section describes the security measures for configuring and tracking event attributes for ELD records, edits, and entries in a standardized manner.


(a) Each ELD event must feature an event sequence ID number.


(1) The event sequence ID number for each ELD event must use continuous numbering across all users of that ELD and across engine and ELD power on and off cycles.


(2) An ELD must use the next available event sequence ID number (incremented by one) each time a new event log is recorded.


(3) The event sequence ID number must track at least the last 65,536 unique events recorded on the ELD.


(b) The continuous event sequence ID numbering structure used by the ELD must be mapped into a continuous hexadecimal number between 0000 (Decimal 0) and FFFF (Decimal 65535).


(a) An ELD must retain the original records even when allowed edits and entries are made over a driver's ELD records.


(b) An ELD must keep track of all event record history, and the process used by the ELD must produce the event record status, event record origin, and event type for the ELD records in the standard categories specified in sections 7.23, 7.22, and 7.25 of this appendix, respectively for each record as a standard security measure. For example, an ELD may use the process outlined in sections 4.4.4.2.1-4.4.4.2.6 to meet the requirements of this section.


At the instance an ELD creates a record automatically, the ELD must:


(a) Set the “Event Record Status” to “1” (active); and


(b) Set the “Event Record Origin” to “1” (automatically recorded by ELD).


At the instance of a driver editing existing record(s), the ELD must:


(a) Identify the ELD record(s) being modified for which the “Event Record Status” is currently set to “1” (active);


(b) Acquire driver input for the intended edit and construct the ELD record(s) that will replace the record(s) identified in paragraph 4.4.4.2.2(a) of this appendix;


(c) Set the “Event Record Status” of the ELD record(s) identified in paragraph 4.4.4.2.2(a) of this appendix, which is being modified, to “2” (inactive-changed);


(d) Set the “Event Record Status” of the ELD record(s) constructed in paragraph 4.4.4.2.2(b) of this appendix to “1” (active); and


(e) Set the “Event Record Origin” of the ELD record(s) constructed in paragraph 4.4.4.2.2(b) of this appendix to “2” (edited or entered by the driver).


When a driver enters missing record(s), the ELD must:


(a) Acquire driver input for the missing entries being implemented and construct the new ELD record(s) that will represent the driver entries;


(b) Set the “event record status” of the ELD record(s) constructed in paragraph 4.4.4.2.3(a) of this appendix to “1” (active); and


(c) Set the “event record origin” of the ELD record(s) constructed in paragraph 4.4.4.2.3(a) of this appendix to “2” (edited or entered by the driver).


When a driver reviews and assumes ELD record(s) logged under the unidentified driver profile, the ELD must:


(a) Identify the ELD record(s) logged under the unidentified driver profile that will be reassigned to the driver;


(b) Use elements of the unidentified driver log(s) from paragraph 4.4.4.2.4(a) of this appendix and acquire driver input to populate missing elements of the log originally recorded under the unidentified driver profile, and construct the new event record(s) for the driver;


(c) Set the event record status of the ELD record(s) identified in paragraph 4.4.4.2.4(a) of this appendix, which is being modified, to “2” (inactive-changed);


(d) Set the event record status of the ELD record(s) constructed in paragraph 4.4.4.2.4(b) of this appendix to “1” (active); and


(e) Set the event record origin of the ELD record(s) constructed in paragraph 4.4.4.2.4(b) of this appendix to “4” (assumed from unidentified driver profile).


If a motor carrier requests an edit on a driver's records electronically, the ELD must:


(a) Identify the ELD record(s) the motor carrier requests to be modified for which the “event record status” is currently set to “1” (active);


(b) Acquire motor carrier input for the intended edit and construct the ELD record(s) that will replace the record identified in paragraph 4.4.4.2.5(a) of this appendix—if approved by the driver;


(c) Set the event record status of the ELD record(s) in paragraph 4.4.4.2.5(b) of this appendix to “3” (inactive-change requested); and


(d) Set the event record origin of the ELD record constructed in paragraph 4.4.4.2.5(b) of this appendix to “3” (edit requested by an authenticated user other than the driver).


(a) If edits are requested by the motor carrier, the ELD must allow the driver to review the requested edits and indicate on the ELD whether the driver confirms or rejects the requested edit(s).


(b) If the driver approves the motor carrier's edit suggestion the ELD must:


(1) Set the event record status of the ELD record(s) identified under paragraph 4.4.4.2.5 (a) of this appendix being modified, to “2” (inactive-changed); and


(2) Set the “event record status” of the ELD record(s) constructed in paragraph 4.4.4.2.5 (b) of this appendix to “1” (active).


(c) If the driver disapproves the motor carrier's edit(s) suggestion, the ELD must set the “event record status” of the ELD record(s) identified in paragraph 4.4.4.2.5 (b) of this appendix to “4” (inactive-change rejected).


(a) An ELD must support standard security measures that require the calculation and recording of standard data check values for each ELD event recorded, for each line of the output file, and for the entire data file to be generated for transmission to an authorized safety official or the motor carrier.


(b) For purposes of implementing data check calculations, the alphanumeric-to-numeric mapping provided in Table 3 of this appendix must be used.


(c) Each ELD event record type specified in sections 4.5.1.1 and 4.5.1.3 of this appendix must include an event data check value, which must be calculated as specified in section 4.4.5.1. An event data check value must be calculated at the time of the following instances and must accompany that event record thereafter:


(1) When an event record is automatically created by the ELD;


(2) When an authorized edit is performed by the driver on the ELD;


(3) When an electronic edit proposal is created by the motor carrier through the ELD system.


(d) Each line of the ELD output file must include a line data check value, which must be calculated as specified in section 4.4.5.2 of this appendix.


(e) Each ELD report must also include a file data check value, which must be calculated as specified in section 4.4.5.3 of this appendix.


The event data check value must be calculated as follows.


(a) A checksum calculation includes the summation of numeric values or mappings of a specified group of alphanumeric data elements. The ELD must calculate an event checksum value associated with each ELD event at the instance of the event record being created.


(b) The event record elements that must be included in the checksum calculation are the following:


(1) <Event Type>,


(2) <Event Code>,


(3) <Event Date>,


(4) <Event Time>,


(5) <Vehicle Miles>,


(6) <Engine Hours>,


(7) <Event Latitude>,


(8) <Event Longitude>,


(9) <CMV Power Unit Number>”, and


(10) <ELD username>.


(c) The ELD must sum the numeric values of all individual characters making up the listed data elements using the character to decimal value coding specified in Table 3 of this appendix, and use the 8-bit lower byte of the hexadecimal representation of the summed total as the event checksum value for that event.


The event data check value must be the hexadecimal representation of the output 8-bit byte, after the below bitwise operations are performed on the binary representation of the event checksum value, as set forth below:


(a) Three consecutive circular shift left (rotate no carry -left) operations; and


(b) A bitwise exclusive OR (XOR) operation with the hexadecimal value C3 (decimal 195; binary 11000011).


A line data check value must be calculated at the time of the generation of the ELD output file, to transfer data to authorized safety officials or to catalogue drivers' ELD records at a motor carrier's facility. A line data check value must be calculated as follows.


(a) The ELD must calculate a line checksum value associated with each line of ELD output file at the instance when an ELD output file is generated.


(b) The data elements that must be included in the line checksum calculation vary as per the output data file specified in section 4.8.2.1 of this appendix.


(c) The ELD must convert each character featured in a line of output using the character to decimal value coding specified on Table 3 of this appendix and sum the converted numeric values of each character listed on a given ELD output line item (excluding the line data check value being calculated), and use the 8-bit lower byte value of the hexadecimal representation of the summed total as the line checksum value for that line of output.


The line data check value must be calculated by performing the following operations on the binary representation of the line checksum value as follows:


(a) Three consecutive circular shift left (rotate no carry -left) operations on the line checksum value; and


(b) A bitwise XOR operation with the hexadecimal value 96 (decimal 150; binary 10010110).


The calculated line data check value must be appended as the last line item of each of the individual line items of the ELD output file as specified in the output file format in section 4.8.2.1 of this appendix.


A file data check value must also be calculated at the time of the creation of an ELD output file. A file data check value must be calculated as follows.


(a) The ELD must calculate a single 16-bit file checksum value associated with an ELD output file at the instance when an ELD output file is generated.


(b) The file data check value calculation must include all individual line data check values contained in that file.


(c) The ELD must sum all individual line data check values contained in a data file output created, and use the lower two 8-bit byte values of the hexadecimal representation of the summed total as the “file checksum” value.


(a) The file data check value must be calculated by performing the following operations on the binary representation of the file checksum value:


(1) Three consecutive circular shift left (aka rotate no carry -left) operations on each 8-bit bytes of the value; and


(2) A bitwise XOR operation with the hexadecimal value 969C (decimal 38556; binary 1001011010011100).


(b) The file data check value must be the 16-bit output obtained from the above process.


The calculated 16-bit file data check value must be converted to hexadecimal 8-bit bytes and must be appended as the last line item of the ELD output file as specified in the output file format in section 4.8.2.1.11 of this appendix.


An ELD must record data at the following discrete events:


When a driver's duty status changes, the ELD must associate the record with the driver, the record originator—if created during an edit or entry—the vehicle, the motor carrier, and the shipping document number and must include the following data elements:


(a) <Event Sequence ID Number> as described in section 7.24 of this appendix;


(b) <Event Record Status> as described in section 7.23;


(c) <Event Record> Origin as described in section 7.22;


(d) <Event Type> as described in section 7.25;


(e) <Event Code as described in section 7.20;


(f) <{*Event*} Date> as described in section 7.8;


(g) <{*Event*} Time> as described in section 7.40;


(h) <{*Accumulated*} Vehicle Miles> as described in section 7.43;


(i) <{*Elapsed*}> Engine Hours as described in section 7.19;


(j) <{*Event*}> Latitude as described in section 7.31;


(k) <{*Event*}> Longitude as described in section 7.33;


(l) <Distance Since Last Valid Coordinates> as described in section 7.9;


(m) <Malfunction Indicator Status {*for ELD*}> as described in section 7.35;


(n) <Data Diagnostic Event Indicator Status {*for Driver*}> as described in section 7.7;


(o) <{*Event*}> Comment/Annotation as described in section 7.6;


(p) <Driver's Location Description> as described in section 7.12; and


(q) <Event Data Check Value> as described in section 7.21.


(a) When a CMV is in motion, as described in section 4.3.1.2 of this appendix, and there has not been a duty status change event or another intermediate log event recorded in the previous 1-hour period, the ELD must record a new intermediate log event.


(b) The ELD must associate the record to the driver, the vehicle, the motor carrier, and the shipping document number, and must include the same data elements outlined in section 4.5.1.1 of this appendix except for item (p) in section 4.5.1.1.


(a) At each instance when the status of a driver's indication of personal use of CMV or yard moves changes, the ELD must record a new event.


(b) The ELD must associate the record with the driver, the vehicle, the motor carrier, and the shipping document number, and must include the same data elements outlined in section 4.5.1.1 of this appendix.


(a) At each instance when a driver certifies or re-certifies that the driver's records for a given 24-hour period are true and correct, the ELD must record the event.


(b) The ELD must associate the record with the driver, the vehicle, the motor carrier, and the shipping document number and must include the following data elements:


(1)<Event Sequence ID Number> as described in section 7.24 of this appendix;


(2)<Event Type> as described in section 7.25;


(3)<Event Code> as described in section 7.20;


(4)<Time Zone Offset from UTC> as described in section 7.41.


(5) <{*Event*} Date> and <Date {of the certified record}> as described in section 7.8; and


(6) <{*Event*} Time> as described in section 7.40.


(a) At each instance when an authorized user logs in and out of the ELD, the ELD must record the event.


(b) The ELD must associate the record with the driver, the vehicle, the motor carrier, and the shipping document number, and must include the following data elements:


(1) <Event Sequence ID Number> as described in section 7.24 of this appendix;


(2) <Event Type> as described in section 7.25;


(3) <Event Code> as described in section 7.20;


(4) <{*Event*} Date> as described in section 7.8;


(5) <{*Event*} Time> as described in section 7.40;


(6) <{*Total*} Vehicle Miles> as described in section 7.43; and


(7) <{*Total*} Engine Hours> as described in section 7.19.


(a) When a CMV's engine is powered up or shut down, an ELD must record the event within 1 minute of occurrence and retain the earliest shut down and latest power-up event if the CMV has not moved since the last ignition power on cycle.


(b) The ELD must associate the record with the driver or the unidentified driver profile, the vehicle, the motor carrier, and the shipping document number, and must include the following data elements:


(1) <Event Sequence ID Number> as described in section 7.24 of this appendix;


(2) <Event Type> as described in section 7.25;


(3) <Event Code> as described in section 7.20;


(4) <{*Event*} Date> as described in section 7.8;


(5) <{*Event*} Time> as described in section 7.40;


(6) <{*Total*} Vehicle Miles> as described in section 7.43;


(7) <{*Total*} Engine Hours> as described in section 7.19;


(8) <{*Event*} Latitude> as described in section 7.31;


(9) <{*Event*} Longitude> as described in section 7.33; and


(10) <Distance Since Last Valid Coordinates> as described in section 7.9.


(a) At each instance when an ELD malfunction or data diagnostic event is detected or cleared by the ELD, the ELD must record the event.


(b) The ELD must associate the record with the driver, the vehicle, the motor carrier, and the shipping document number, and must include the following data elements:


(1) <Event Sequence ID Number> as described in section 7.24 of this appendix;


(2) <Event Type> as described in section 7.25;


(3) <Event Code> as described in section 7.20;


(4) <Malfunction/Diagnostic Code> as described in section 7.34;


(5) <{*Event*} Date> as described in section 7.8;


(6) <{*Event*} Time> as described in section 7.40;


(7) <{*Total*} Vehicle Miles> as described in section 7.43; and


(8) <{*Total*} Engine Hours> as described in section 7.19.


An ELD must have the capability to monitor its compliance with the technical requirements of this section for the detectable malfunctions and data inconsistencies listed in Table 4 of this appendix and must keep records of its malfunction and data diagnostic event detection.


(a) An ELD must monitor data it receives from the engine ECM or alternative sources as allowed in sections 4.3.1.1-4.3.1.4 of this appendix, its onboard sensors, and data record history to identify instances when it may not have complied with the power requirements specified in section 4.3.1.1, in which case, the ELD must record a power data diagnostics event for the corresponding driver(s), or under the unidentified driver profile if no drivers were authenticated at the time of detection.


(b) An ELD must set a power compliance malfunction if the power data diagnostics event described in paragraph 4.6.1.1(a) of this appendix indicates an aggregated in-motion driving time understatement of 30 minutes or more on the ELD over a 24-hour period across all driver profiles, including the unidentified driver profile.


(a) An ELD must monitor the data it receives from the engine ECM or alternative sources as allowed in sections 4.3.1.1-4.3.1.4 of this appendix, its onboard sensors, and data record history to identify instances and durations of its non-compliance with the ELD engine synchronization requirement specified in section 4.2.


(b) An ELD required to establish a link to the engine ECM as described in section 4.2 must monitor its connectivity to the engine ECM and its ability to retrieve the vehicle parameters described under section 4.3.1 of this appendix and must record an engine-synchronization data diagnostics event when it no longer can acquire updated values for the ELD parameters required for records within 5 seconds of the need.


(c) An ELD must set an engine synchronization compliance malfunction if connectivity to any of the required data sources specified in section 4.3.1 of this appendix is lost for more than 30 minutes during a 24-hour period aggregated across all driver profiles, including the unidentified driver profile.


The ELD must periodically cross-check its compliance with the requirement specified in section 4.3.1.5 of this appendix with respect to an accurate external UTC source and must record a timing compliance malfunction when it can no longer meet the underlying compliance requirement.


(a) An ELD must continually monitor the availability of valid position measurements meeting the listed accuracy requirements in section 4.3.1.6 of this appendix and must track the distance and elapsed time from the last valid measurement point.


(b) ELD records requiring location information must use the last valid position measurement and include the latitude/longitude coordinates and distance traveled, in miles, since the last valid position measurement.


(c) An ELD must monitor elapsed time during periods when the ELD fails to acquire a valid position measurement within 5 miles of the CMV's movement. When such elapsed time exceeds a cumulative 60 minutes over a 24 hour period, the ELD must set and record a positioning compliance malfunction.


(d) If a new ELD event must be recorded at an instance when the ELD had failed to acquire a valid position measurement within the most recent elapsed 5 miles of driving, but the ELD has not yet set a positioning compliance malfunction, the ELD must record the character “X” in both the latitude and longitude fields, unless location is entered manually by the driver, in which case it must log the character “M” instead. Under the circumstances listed in this paragraph, if the ELD event is due to a change in duty status for the driver, the ELD must prompt the driver to enter location manually in accordance with section 4.3.2.7 of this appendix. If the driver does not enter the location information and the vehicle is in motion, the ELD must record a missing required data element data diagnostic event for the driver.


(e) If a new ELD event must be recorded at an instance when the ELD has set a positioning compliance malfunction, the ELD must record the character “E” in both the latitude and longitude fields regardless of whether the driver is prompted and manually enters location information.


(a) An ELD must monitor its storage capacity and integrity and must detect a data recording compliance malfunction if it can no longer record or retain required events or retrieve recorded logs that are not otherwise catalogued remotely by the motor carrier.


(b) An ELD must monitor the completeness of the ELD event record information in relation to the required data elements for each event type and must record a missing data elements data diagnostics event for the driver if any required field is missing at the time of recording.


(a) When there are ELD records involving driving time logged on an ELD under the unidentified driver profile, the ELD must prompt the driver(s) logging in with a warning indicating the existence of new unassigned driving time.


(b) The ELD must provide a mechanism for the driver to review and either acknowledge the assignment of one or more of the unidentified driver records attributable to the driver under the authenticated driver's profile as described in paragraph 4.3.2.8.2(b)(1) of this appendix or indicate that these records are not attributable to the driver.


(c) If more than 30 minutes of driving in a 24-hour period show unidentified driver on the ELD, the ELD must detect and record an unidentified driving records data diagnostic event and the data diagnostic indicator must be turned on for all drivers logged in to that ELD for the current 24-hour period and the following 7 days.


(d) An unidentified driving records data diagnostic event can be cleared by the ELD when driving time logged under the unidentified driver profile for the current 24-hour period and the previous 7 consecutive days drops to 15 minutes or less.


(a) An ELD must implement in-service monitoring functions to verify that the data transfer mechanism(s) described in section 4.9.1 of this appendix are continuing to function properly. An ELD must verify this functionality at least once every 7 days. These monitoring functions may be automatic or may involve manual steps for a driver.


(b) If the monitoring mechanism fails to confirm proper in-service operation of the data transfer mechanism(s), an ELD must record a data transfer data diagnostic event and enter an unconfirmed data transfer mode.


(c) After an ELD records a data transfer data diagnostic event, the ELD must increase the frequency of the monitoring function to check at least once every 24-hour period. If the ELD stays in the unconfirmed data transfer mode following the next three consecutive monitoring checks, the ELD must detect a data transfer compliance malfunction.


In addition to the required monitoring schemes described in sections 4.6.1.1-4.6.1.7 of this appendix, the ELD provider may implement additional, technology-specific malfunction and data diagnostic detection schemes and may use the ELD's malfunction status indicator and data diagnostic status indicator (described in sections 4.6.2.1 and 4.6.3.1) to communicate the ELD's malfunction or non-compliant state to the operator(s) of the ELD.


ELD malfunctions affect the integrity of the device and its compliance; therefore, active malfunctions must be indicated to all drivers who may use that ELD. An ELD must provide a recognizable visual indicator, and may provide an audible signal, to the operator as to its malfunction status.


(a) An ELD must display a single visual malfunction indicator for all drivers using the ELD on the ELD's display or on a stand-alone indicator. The visual signal must be visible to the driver when the driver is seated in the normal driving position.


(b) The ELD malfunction indicator must be clearly illuminated when there is an active malfunction on the ELD.


(c) The malfunction status must be continuously communicated to the driver when the ELD is powered.


ELD data diagnostic status affects only the authenticated user; therefore, an ELD must only indicate the active data diagnostics status applicable to the driver logged into the ELD. An ELD must provide a recognizable visual indicator, and may provide an audible signal, to the driver as to its data diagnostics status.


(a) An ELD must display a single visual data diagnostics indicator, apart from the visual malfunction indicator described in section 4.6.2.1 of this appendix, to communicate visually the existence of active data diagnostics events for the applicable driver.


(b) The visual signal must be visible to the driver when the driver is seated in the normal driving position.


(a) If a driver selects the sleeper-berth state for the driver's record of duty status, and no co-driver has logged into the ELD as on-duty driving, and if the ELD outputs audible signals, the ELD must either:


(1) Allow the driver to mute the ELD's volume or turn off the ELD's audible output, or


(2) Automatically mute the ELD's volume or turn off the ELD's audible output.


(b) For purposes of this section, if an ELD operates in combination with another device or other hardware or software technology that is not separate from the ELD, the volume controls required herein apply to the combined device or technology.


(a) An ELD must provide a mechanism for a driver to obtain a copy of the driver's own ELD records on demand, in either an electronic or printout format compliant with inspection standards outlined in section 4.8.2.1 of this appendix.


(b) The process must not require a driver to go through the motor carrier to obtain copies of the driver's own ELD records if driver's records reside on or are accessible directly by the ELD unit used by the driver.


(c) If an ELD meets the requirements of this section by making data files available to the driver, it must also provide a utility function for the driver to display the data on a computer, at a minimum, as specified in § 395.8(g).


(a) An ELD must record the events listed in section 4.5.1 of this appendix under all circumstances. However, when a driver indicates that the driver is temporarily using the CMV for an authorized personal purpose, a subset of the recorded elements must either be omitted in the records or recorded at a lower precision level, as described in further detail below. The driver indicates this intent by setting the driver's duty status to off-duty, as described in section 4.3.2.2.1, and indicating authorized personal use of CMV as described in section 4.3.2.2.2.


(b) During a period when a driver indicates authorized personal use of CMV, the ELD must:


(1) Record all new ELD events with latitude/longitude coordinates information rounded to a single decimal place resolution; and


(2) Omit recording vehicle miles and engine hours fields in new ELD logs by leaving them blank, except for events corresponding to a CMV's engine power-up and shut-down activity as described in section 4.5.1.6 of this appendix.


(c) A driver's indication that the CMV is being operated for authorized personal purposes may span more than one CMV ignition on cycle if the driver proactively confirms continuation of the personal use condition prior to placing the vehicle in motion when the ELD prompts the driver at the beginning of the new ignition power on cycle.


The ELD must be able to generate a compliant report as specified in this section, either as a printout or on a display.


Print paper must be able to accommodate the graph grid specifications as listed in section 4.8.1.3 of this appendix.


(a) This section does not apply if an ELD produces a printout for use at a roadside inspection.


(b) An ELD must be designed so that its display may be reasonably viewed by an authorized safety official without entering the commercial motor vehicle. For example, the display may be untethered from its mount or connected in a manner that would allow it to be passed outside of the vehicle for a reasonable distance.


(a) The printout and display must show reports for the inspected driver's profile and the unidentified driver profile separately. If there are no unidentified driver records existing on the ELD for the current 24-hour period and for any of the previous 7 consecutive days, an ELD does not need to print or display unidentified driver records for the authorized safety official. Otherwise, both reports must be printed or displayed and provided to the authorized safety official.


(b) The printout and display must show the following information for the current 24-hour period and each of the previous 7 consecutive days: (Items in < . > are data elements.)


1 Printout report must only list up to 10 most recent ELD malfunctions and up to 10 most recent data diagnostics events within the time period for which the report is generated.


(c) The printout and display must show a graph-grid consistent with § 395.8(g) showing each change of duty status.


(1) On the printout, the graph-grid for each day's RODS must be at least 6 inches by 1.5 inches in size.


(2) The graph-grid must overlay periods of driver's indications of authorized personal use of CMV and yard moves using a different style line (such as dashed or dotted line) or shading. The appropriate abbreviation must also be indicated on the graph-grid.


An ELD must have the capability to generate a consistent electronic file output compliant with the format described herein to facilitate the transfer, processing, and standardized display of ELD data sets on the authorized safety officials' computing environments.


(a) Regardless of the particular database architecture used for recording the ELD events in electronic format, the ELD must produce a standard ELD data output file for transfer purposes, which must be generated according to the standard specified in this section.


(b) Data output must be provided in a single comma-delimited file outlined in this section using American National Standard Code for Information Exchange (ASCII) character sets meeting the standards of ANSI INCITS 4-1986 (R2012) (incorporated by reference, see § 395.38). It must include:


(1) A header segment, which specifies current or non-varying elements of an ELD file; and


(2) Variable length comma-delimited segments for the drivers, vehicles, ELD events, ELD malfunction and data diagnostics records, ELD login and logout activity, and unidentified driver records.


(3) Any field value that may contain a comma (“,”) or a carriage return (<CR>) must be replaced with a semicolon (`;') before generating the compliant CSV output file.


This segment must include the following data elements and format:


This segment must list all drivers and co-drivers with driving time records on the most recent CMV operated by the inspected driver and motor carrier's support personnel who requested edits within the time period for which this file is generated. The list must be in chronological order with most recent user of the ELD on top, and include the driver being inspected, the co-driver, and the unidentified driver profile. This segment has a variable number of rows depending on the number of profiles with activity over the time period for which this file is generated. This section must start with the following title:


Each subsequent row must have the following data elements:


This segment must list each CMV that the current driver operated and that has been recorded on the driver's ELD records within the time period for which this file is generated. The list must be rank ordered in accordance with the time of CMV operation with the most recent CMV being on top. This segment has a variable number of rows depending on the number of CMVs operated by the driver over the time period for which this file is generated. This section must start with the following title:


Each subsequent row must have the following data elements:


This segment must list ELD event records tagged with event types 1 (a change in duty status as described in section 4.5.1.1 of this appendix), 2 (an intermediate log as described in section 4.5.1.2), and 3 (a change in driver's indication of conditions impacting driving time recording as described in section 4.5.1.3). The segment must list all event record status types and all event record origins for the driver, rank ordered with the most current log on top in accordance with the date and time fields of the record. This segment has a variable number of rows depending on the number of ELD events recorded for the driver over the time period for which this file is generated. This section must start with the following title:


Each subsequent row must have the following data elements:


This segment must list only the elements of the ELD event list created in section 4.8.2.1.4 of this appendix that have an annotation, comment, or a manual entry of location description by the driver. This segment has a variable number of rows depending on the number of ELD events under section 4.8.2.1.4 that feature a comment, annotation, or manual location entry by the driver. This section must start with the following title:


Each subsequent row must have the following data elements:


This segment must list ELD event records with event type 4 (driver's certification of own records as described in section 4.5.1.4 of this appendix) for the inspected driver for the time period for which this file is generated. It must be rank ordered with the most current record on top. This segment has a variable number of rows depending on the number of certification and re-certification actions the authenticated driver may have executed on the ELD over the time period for which this file is generated. This section must start with the following title:


Each subsequent row must have the following data elements:


This segment must list all malfunctions that have occurred on this ELD during the time period for which this file is generated. It must list diagnostic event records related to the driver being inspected, rank ordered with the most current record on top. This segment has a variable number of rows depending on the number of ELD malfunctions and ELD diagnostic event records recorded and relevant to the inspected driver over the time period for which this file is generated. This section must start with the following title:


Each subsequent row must have the following data elements:


This segment must list the login and logout activity on the ELD (ELD events with event type 5 (A driver's login/logout activity)) for the inspected driver for the time period for which this file is generated. It must be rank ordered with the most recent activity on top. This section must start with the following title:


Each subsequent row must have the following data elements:


This segment must list the logs created when a CMV's engine is powered up and shut down (ELD events with event type 6 (CMV's engine power up/shut down)) for the time period for which this file is generated. It must be rank ordered with the latest activity on top. This section must start with the following title:


This segment must list the ELD event records for the Unidentified Driver profile, rank ordered with most current log on top in accordance with the date and time fields of the logs. This segment has a variable number of rows depending on the number of Unidentified Driver ELD records recorded over the time period for which this file is generated. This section must start with the following title:


Each subsequent row must have the following data elements:


This segment lists the file data check value as specified in section 4.4.5.3 of this appendix. This part includes a single line as follows:


If the ELD output is saved in a file for transfer or maintenance purposes, it must follow the 25 character-long filename standard below:


(a) The first five position characters of the filename must correspond to the first five letters of the last name of the driver for whom the file is compiled. If the last name of the driver is shorter than five characters, remaining positions must use the character “_” [underscore] as a substitute character. For example, if the last name of the driver is “Lee”, the first five characters of the output file must feature “Lee__ __”.


(b) The sixth and seventh position characters of the filename must correspond to the last two digits of the driver's license number for the driver for whom the file is compiled.


(c) The eighth and ninth position characters of the filename must correspond to the sum of all individual numeric digits in the driver's license number for the driver for whom the file is compiled. The result must be represented in two-digit format. If the sum value exceeds 99, use the last two digits of the result. For example, if the result equals “113”, use “13”. If the result is less than 10, use 0 as the first digit. For example, if the result equals “5”, use “05”.


(d) The tenth through fifteenth position characters of the filename must correspond to the date the file is created. The result must be represented in six digit format “MMDDYY” where “MM” represents the month, “”DD” represents the day, and “YY” represents the last two digits of the year. For example, February 5, 2013, must be represented as “020513”.


(e) The sixteenth position character of the filename must be a hyphen “-”.


(f) The seventeenth through twenty-fifth position characters of the filename must, by default, be “000000000” but each of these nine digits can be freely configured by the motor carrier or the ELD provider to be a number between 0 and 9 or a character between A and Z to be able to produce distinct files—if or when necessary—that may otherwise be identical in filename as per the convention proposed in this section. ELD providers or motor carriers do not need to disclose details of conventions they may use for configuring the seventeenth through twenty-fifth digits of the filename.


An ELD must be able to present the captured ELD records of a driver in the standard electronic format as described below, and transfer the data file to an authorized safety official, on demand, for inspection purposes.


(a) On demand during a roadside safety inspection, an ELD must produce ELD records for the current 24-hour period and the previous 7 consecutive days in electronic format, in the standard data format described in section 4.8.2.1 of this appendix.


(b) When a driver uses the single-step driver interface, as described in section 4.3.2.4 of this appendix, to indicate that the ELD compile and transfer the driver's ELD records to authorized safety officials, the ELD must transfer the generated ELD data output to the computing environment used by authorized safety officials via the standards referenced in this section. To meet roadside electronic data transfer requirements, an ELD must do at least one of the following:


(1) Option 1—Telematics transfer methods. Transfer the electronic data using both:


(i) Wireless Web services, and


(ii) Email, or


(2) Option 2—Local transfer methods. Transfer the electronic data using both:


(i) USB2 (incorporated by reference, see § 395.38), and


(ii) Bluetooth (incorporated by reference, see § 395.38).


(c) The ELD must provide an ELD record for the current 24-hour period and the previous 7 consecutive days as described in section 4.8.1.3 either on a display or on a printout.


(d) An ELD must support one of the two options for roadside data transfer in paragraph (b) of this section, and must certify proper operation of each element under that option. An authorized safety official will specify which transfer mechanism the official will use within the certified transfer mechanisms of an ELD.


(a) An ELD must be capable of retaining copies of electronic ELD records for a period of at least 6 months from the date of receipt.


(b) An ELD must produce, on demand, a data file or a series of data files of ELD records for a subset of its drivers, a subset of its vehicles, and for a subset of the 6-month record retention period, to be specified by an authorized safety official, in an electronic format standard described in section 4.8.2.1 of this appendix or, if the motor carrier has multiple offices or terminals, within the time permitted under § 390.29.


(c) At a minimum, an ELD must be able to transfer the ELD records electronically by one of the following transfer mechanisms:


(1) Web Services as specified in section 4.10.1.1 of this appendix (but not necessarily wirelessly), and Email as specified 4.10.1.2 (but not necessarily wirelessly); or


(2) USB 2.0 as specified in section 4.10.1.3 of this appendix and Bluetooth, as specified in section 4.10.1.4 (both incorporated by reference, see § 395.38).


ELDs must transmit ELD records electronically in accordance with the file format specified in section 4.8.2.1 of this appendix and must be capable of a one-way transfer of these records to authorized safety officials upon request as specified in section 4.9.


For each type of data transfer mechanism, an ELD must follow the specifications in this section.


(a) Transfer of ELD data to FMCSA via Web Services must follow the following standards:


(1) Web Services Description Language (WSDL) 1.1.


(2) Simple Object Access Protocol (SOAP) 1.2 (incorporated by reference, see § 395.38).


(3) Extensible Markup Language (XML) 1.0 5th Edition.


(b) If an ELD provider plans to use Web Services, upon ELD provider registration as described in section 5.1 of this appendix,


(1) FMCSA will provide formatting files necessary to convert the ELD file into an XML format and upload the data to the FMCSA servers. These files include FMCSA's Rules of Behavior, XML Schema, WSDL file, Interface Control Document (ICD), and the ELD Web Services Development Handbook, and


(2) ELD Providers must obtain a Public/Private Key pair compliant with the NIST SP 800-32, Introduction to Public Key Technology and the Federal PKI Infrastructure (incorporated by reference, see § 395.38), and submit the public key with their registration.


(3) ELD Providers will be required to complete a test procedure to ensure their data is properly formatted before they can begin submitting driver's ELD data to the FMCSA server.


(c) ELD data transmission must be accomplished in a way that protects the privacy of the driver(s).


(d) At roadside, if both the vehicle operator and law enforcement have an available data connection, the vehicle operator will initiate the transfer of ELD data to an authorized safety official. In some cases, an ELD may be capable of converting the ELD file to an XML format using an FMCSA-provided schema and upload it using information provided in the WSDL file using SOAP via RFC 7230, RFC 7231, and RFC 5246, Transport Layer Security (TLS) Protocol Version 1.2 (incorporated by reference, see § 395.38).


(a) The ELD must attach a file to an email message to be sent using RFC 5321 Simple Mail Transfer Protocol (SMTP) (incorporated by reference, see § 395.38), to a specific email address, which will be shared with the ELD providers during the technology registration process.


(b) The file must have the format described in section 4.8.2.1 of this appendix and must be encrypted using the Secure/Multipurpose Internet Mail Extensions as described in RFC 5751 (incorporated by reference, see § 395.38), and the RSA algorithm as described in RFC 4056 (incorporated by reference, see § 395.38), with the FMCSA public key compliant with NIST SP 800-32 (incorporated by reference, see § 395.38) to be provided to the ELD provider at the time of registration. The content must be encrypted using AESin FIPS Publication 197 (incorporated by reference, see § 395.38), and RFC 3565 (incorporated by reference, see § 395.38).


(c) The email must be formatted using the RFC 5322 Internet Message Format (incorporated by reference, see § 395.38), as follows:


(d) A message confirming receipt of the ELD file will be sent to the address specified in the email. The filename must follow the convention specified in section 4.8.2.2 of this appendix.


(a) ELDs certified for the USB data transfer mechanism must be capable of transferring ELD records using the Universal Serial Bus Specification (Revision 2.0) (incorporated by reference, see § 395.38).


(b) Each ELD technology must implement a single USB-compliant interface with the necessary adaptors for a Type A connector. The USB interface must implement the Mass Storage class (08h) for driverless operation, to comply with IEEE standard 1667-2009, (incorporated by reference, see § 395.38).


(c) The ELD must be capable of providing power to a standard USB-compatible drive.


(d) An ELD must re-authenticate the driver prior to saving the driver's ELD file to an external device.


(e) On initiation by an authenticated driver, an ELD must be capable of saving ELD file(s) to USB-compatible drives (AES, in FIPS Publication 197, incorporated by reference, see § 395.38) that are provided by authorized safety officials during an inspection. Prior to initiating this action, ELDs must be capable of reading a text file from an authorized safety officials' drive and verifying it against a file provided to ELD providers who have registered their technologies as described in section 5.1 of this appendix.


(a) Bluetooth SIG Specification of the Bluetooth System covering core package version 2.1 + EDR (incorporated by reference, see § 395.38) must be followed. ELDs using this standard must be capable of displaying a Personal Identification Number generated by the Bluetooth application profile for bonding with other devices(incorporated by reference, see § 395.38).


(b) Upon request of an authorized official, the ELD must become discoverable by the authorized safety officials' Bluetooth-enabled computing platform, and generate a random code, which the driver must share with the official (incorporated by reference, see § 395.38).


(c) The ELD must connect to the roadside authorized safety officials' technology via wireless personal area network and transmit the required data via Web Services as described in section 4.10.1.1 of this appendix.


Regardless of the roadside transmission option supported by an ELD, ELD records are to be retained and must be able to transmit enforcement-specified historical data for their drivers using one of the methods specified under section 4.9.2 of this appendix.


(a) Web services option must follow the specifications described under section 4.10.1.1 of this appendix.


(b) The email option must follow the specifications described under section 4.10.1.2 of this appendix.


(c) The USB option must follow the specifications of Universal Serial Bus Specification, revision 2.0 (incorporated by reference, see § 395.38) and described in section 4.10.1.3 of this appendix.


(d) Bluetooth must follow the specifications incorporated by reference (see § 395.38) and described in section 4.10.1.4 of this appendix.


As described in § 395.22(a) of this part, motor carriers must only use ELDs that are listed on the FMCSA website. An ELD provider must register with FMCSA and certify each ELD model and version for that ELD to be listed on this website.


(a) An ELD provider developing an ELD technology must register online at a secure FMCSA website where the ELD provider can securely certify that its ELD is compliant with this appendix.


(b) Provider's registration must include the following information:


(1) Company name of the technology provider/manufacturer.


(2) Name of an individual authorized by the provider to verify that the ELD is compliant with this appendix and to certify it under section 5.2 of this appendix.


(3) Address of the registrant.


(4) Email address of the registrant.


(5) Telephone number of the registrant.


The ELD provider must keep the information in section 5.1.1(b) of this appendix current through FMCSA's website.


FMCSA will provide a unique ELD registration ID, authentication key(s), authentication file(s), and formatting and configuration details required in this appendix to registered providers during the registration process.


A registered ELD provider must certify that each ELD model and version has been sufficiently tested to meet the functional requirements included in this appendix under the conditions in which the ELD would be used.


(a) An ELD provider registered online as described in section 5.1.1 of this appendix must disclose the information in paragraph (b) of this section about each ELD model and version and certify that the particular ELD is compliant with the requirements of this appendix.


(b) The online process will only allow a provider to complete certification if the provider successfully discloses all of the following required information:


(1) Name of the product.


(2) Model number of the product.


(3) Software version of the product.


(4) An ELD identifier, uniquely identifying the certified model and version of the ELD, assigned by the ELD provider in accordance with section 7.15 of this appendix.


(5) Picture and/or screen shot of the product.


(6) User's manual describing how to operate the ELD.


(7) Description of the supported and certified data transfer mechanisms and step-by-step instructions for a driver to produce and transfer the ELD records to an authorized safety official.


(8) Summary description of ELD malfunctions.


(9) Procedure to validate an ELD authentication value as described in section 7.14 of this appendix.


(10) Certifying statement describing how the product was tested to comply with FMCSA regulations.


Paragraph 5.2.1(b)(9) of this appendix requires that the ELD provider identify its authentication process and disclose necessary details for FMCSA systems to independently verify the ELD authentication values included in the dataset of inspected ELD outputs. The authentication value must include a hash component that only uses data elements included in the ELD dataset and datafile. ELD authentication value must meet the requirements specified in section 7.14 of this appendix.


Except for the information listed under paragraphs 5.1.1(b)(2), (4), and (5) and 5.2.1(b)(9) of this appendix, FMCSA will make the information in sections 5.1.1 and 5.2.1 for each certified ELD publicly available on a website to allow motor carriers to determine which products have been properly registered and certified as ELDs compliant with this appendix.


FMCSA may remove an ELD model or version from the list of ELDs on the FMCSA website in accordance with this section.


FMCSA shall initiate the removal of an ELD model or version from the list of ELDs on the FMCSA website by providing the ELD provider written notice stating:


(a) The reasons FMCSA proposes to remove the model or version from the FMCSA list; and


(b) Any corrective action that the ELD provider must take for the ELD model or version to remain on the list.




An ELD provider that receives notice under section 5.4.2 of this appendix may submit a response to FMCSA no later than 30 days after issuance of the notice of proposed removal, explaining:


(a) The reasons why the ELD provider believes the facts relied on by the Agency, in proposing removal, are wrong; or


(b) The action the ELD provider will take to correct the deficiencies that FMCSA identified.


(a) If the ELD provider fails to respond within 30 days of the date of the notice issued under section 5.4.2 of this appendix, the ELD model or version shall be removed from the FMCSA list.


(b) If the ELD provider submits a timely response, FMCSA shall review the response and withdraw the notice of proposed removal, modify the notice of proposed removal, or affirm the notice of proposed removal, and notify the ELD provider in writing of the determination.


(c) Within 60 days of the determination, the ELD provider shall take any action required to comply. If FMCSA determines that the ELD provider failed to timely take the required action within the 60 day period, the ELD model or version shall be removed from the FMCSA list.


(d) FMCSA may request from the ELD provider any information that FMCSA considers necessary to make a determination under this section.


(a) Within 30 days of removal of an ELD model or version from the FMCSA list of certified ELDs under section 5.4.4 of this appendix, the ELD provider may request administrative review.


(b) A request for administrative review must be submitted in writing to FMCSA, ATTN: ELD Removal—Request for Administrative Review. The request must explain the error committed in removing the ELD model or version from the FMCSA list, identify all factual, legal, and procedural issues in dispute, and include any supporting information or documents.


(c) FMCSA may ask the ELD provider to submit additional information or attend a conference to discuss the removal. If the ELD provider does not submit the requested information or attend the scheduled conference, FMCSA may dismiss the request for administrative review.


(d) FMCSA will complete the administrative review and notify the ELD provider of the decision in writing. The decision constitutes a final Agency action.


(a) *American National Standards Institute (ANSI).* 11 West 42nd Street, New York, New York 10036, *http://webstore.ansi.org*, (212) 642-4900.


(1) ANSI INCITS 4-1986 (R2012), American National Standard for Information Systems—Coded Character Sets—7-Bit American National Standard Code for Information Interchange (7-Bit ASCII), approved June 14, 2007, IBR in section 4.8.2.1, Appendix A to subpart B.


(2) ANSI INCITS 446-2008 (R2013), American National Standard for Information Technology—Identifying Attributes for Named Physical and Cultural Geographic Features (Except Roads and Highways) of the United States, Territories, Outlying Areas, and Freely Associated Areas, and the Waters of the Same to the Limit of the Twelve-Mile Statutory Zone, approved October 28, 2008, IBR in section 4.4.2, Appendix A to subpart B.


(b) *Bluetooth SIG, Inc.* 5209 Lake Washington Blvd. NE., Suite 350, Kirkland, WA 98033, *https://www.bluetooth.org/Technical/Specifications/adopted.htm*, (425) 691-3535.


(1) Bluetooth SIG, Inc., Specification of the Bluetooth System: Wireless Connections Made Easy, Covered Core Package version 2.1 + EDR, volumes 0 through 4, approved July 26, 2007, IBR in sections 4.9.1, 4.9.2, 4.10.1.4, 4.10.2, Appendix A to subpart B.


(2) [Reserved]


(c) *Institute of Electrical and Electronic Engineers (IEEE) Standards Association.* 445 Hoes Lane, Piscataway, NJ 08854-4141, *http://standards.ieee.org/index.html*, (732) 981-0060.


(1) IEEE Std 1667-2009, IEEE Standard for Authentication in Host Attachments of Transient Storage Devices, approved 11 November 2009, IBR in section 4.10.1.3, Appendix A to subpart B.


(2) [Reserved]


(d) *Internet Engineering Task Force (IETF).* C/o Association Management Solutions, LLC (AMS) 48377 Freemont Blvd., Suite 117, Freemont, CA 94538, (510) 492-4080.


(1) IETF RFC 3565, Use of the Advanced Encryption Standard (AES) Encryption Algorithm in Cryptographic Message Syntax (CMS), approved July 2003, IBR in section 4.10.1.2, Appendix A to subpart B.


(2) IETF RFC 4056, Use of the RSASSA-PSS Signature Algorithm in Cryptographic Message Syntax (CMS), approved June 2005, IBR in section 4.10.1.2, Appendix A to subpart B.


(3) IETF RFC 5246, The Transport Layer Security (TLS) Protocol Version 1.2, approved August 2008, IBR in section 4.10.1.1, Appendix A to subpart B.


(4) IETF RFC 5321, Simple Mail Transfer Protocol, approved October 2008, IBR in section 4.10.1.2, Appendix A to subpart B.


(5) IETF RFC 5322, Internet Message Format, approved October 2008, IBR in section 4.10.1.2, Appendix A to subpart B.


(6) IETF RFC 5751, Secure/Multipurpose Internet Mail Extensions (S/MIME) Version 3.2, Message Specification, approved January 2010, IBR in section 4.10.1.2, Appendix A to subpart B.


(7) IETF RFC 7230, Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing, approved June 2014, IBR in section 4.10.1.1, Appendix A to subpart B.


(8) IETF RFC 7231, Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content, approved June 2014, IBR in section 4.10.1.1, Appendix A to subpart B.


(e) *National Institute of Standards and Technology (NIST).* 100 Bureau Drive, Stop 1070, Gaithersburg, MD 20899-1070, *http://www.nist.gov*, (301) 975-6478.


(1) Federal Information Processing Standards Publication (FIPS PUB) 197, Advanced Encryption Standard (AES), approved November 26, 2001, IBR in sections 4.10.1.2 and 4.10.1.3, Appendix A to subpart B.


(2) SP 800-32, Introduction to Public Key Technology and the Federal PKI Infrastructure, approved February 26, 2001, IBR in section 4.10.1.2, Appendix A to subpart B.


(f) *Universal Serial Bus Implementers Forum (USBIF).* 3855 SW. 153rd Drive, Beaverton, Oregon 97006, *http://www.usb.org*, (503) 619-0426.


(1) USB Implementers Forum, Inc., Universal Serial Bus Specification, Revision 2.0, approved April 27, 2000, as revised through April 3, 2015, IBR in sections 4.9.1, 4.9.2, 4.10.1.3, and 4.10.2, Appendix A to subpart B.


(2) [Reserved]


(g) *World Wide Web Consortium (W3C).* 32 Vassar Street, Building 32-G514, Cambridge, MA 02139, *http://www.w3.org*, (617) 253-2613.


(1) W3C Recommendation 27, SOAP Version 1.2 Part 1: Messaging Framework (Second Edition), including errata, approved April 2007, IBR in section 4.10.1.1, Appendix A to subpart B.


(2) [Reserved]


*Description:* This data element refers to the 24-hour period starting time specified by the motor carrier for driver's home terminal.


*Purpose:* Identifies the bookends of the work day for the driver; makes ELD records consistent with § 395.8 requirements, which require this information to be included on the form.


*Source:* Motor carrier.


*Used in:* ELD account profile; ELD outputs.


*Data Type:* Programmed or populated on the ELD during account creation and maintained by the motor carrier to reflect true and accurate information for drivers.


*Data Range:* 000000 to 235959; first two digits 00 to 23; middle two digits and last two digits 00 to 59.


*Data Length:* 6 characters.


*Data Format:* <HHMMSS> Military time format, where “HH” refers to hours,


“MM” refers to minutes, and “SS” refers to seconds; designation for start time expressed in time standard in effect at the driver's home terminal.


*Disposition:* Mandatory.


*Examples:* [060000], [073000], [180000].


*Description:* This data element refers to the motor carrier's legal name for conducting commercial business.


*Purpose:* Provides a recognizable identifier about the motor carrier on viewable ELD outputs; provides ability to cross check against USDOT number.


*Source:* FMCSA's Safety and Fitness Electronic Records (SAFER) System.


*Used in:* ELD account profile.


*Data Type:* Programmed on the ELD or entered once during the ELD account creation process.


*Data Range:* Any alphanumeric combination.


*Data Length:* Minimum: 4; Maximum: 120 characters.


*Data Format:* <Carrier Name> as in <CCCC> to <CCCC. . . . . .CCCC>.


*Disposition:* Mandatory.


*Example:* [CONSOLIDATED TRUCKLOAD INC.].


*Description:* This data element refers to the motor carrier's USDOT number.


*Purpose:* Uniquely identifies the motor carrier employing the driver using the ELD.


*Source:* FMCSA's Safety and Fitness Electronic Records (SAFER) System.


*Used in:* ELD account profiles; ELD event records; ELD output file.


*Data Type:* Programmed on the ELD or entered once during the ELD account creation process.


*Data Range:* An integer number of length 1-8 assigned to the motor carrier by FMCSA (9 position numbers reserved).


*Data Length:* Minimum: 1; Maximum: 9 characters.


*Data Format:* <Carrier's USDOT Number> as in <C to <CCCCCCCCC>.


*Disposition:* Mandatory.


*Examples:* [1], [1000003].


*Description:* This data element refers to the identifier the motor carrier uses for their CMVs in their normal course of business.


*Purpose:* Identifies the vehicle a driver operates while a driver's ELD records are recorded; Makes ELD records consistent with § 395.8 requirements, which require the truck or tractor number to be included on the form.


*Source:* Unique CMV identifiers a motor carrier uses in its normal course of business and includes on dispatch documents, or the license number and the licensing State of the power unit.


*Used in:* ELD event records; ELD output file.


*Data Type:* Programmed on the ELD or populated by motor carrier's extended ELD system or entered by the driver.


*Data Range:* Any alphanumeric combination.


*Data Length:* Minimum: 1; Maximum: 10 characters.


*Data Format:* <CMV Power Unit Number> as in <C> to <CCCCCCCCCC>.


*Disposition:* Mandatory for all CMVs operated while using an ELD.


*Examples:* [123], [00123], [BLUEKW123], [TX12345].


*Description:* This data element refers to the manufacturer-assigned vehicle identification number (VIN) for the CMV powered unit.


*Purpose:* Uniquely identifies the operated CMV not only within a motor carrier at a given time but across all CMVs sold within a 30-year rolling period.


*Source:* A robust unique CMV identifier standardized in North America.


*Used in:* ELD event records; ELD output file.


*Data Type:* Retrieved from the engine ECM via the vehicle databus.


*Data Range:* Either blank or 17 characters long as specified by NHTSA in 49 CFR part 565, or 18 characters long with first character assigned as “-” (dash) followed by the 17 character long VIN. Check digit, *i.e.,* VIN character position 9, as specified in 49 CFR part 565 must imply a valid VIN.


*Data Length:* Blank or 17-18 characters.


*Data Format:* <CMV VIN> or <“-”> <CMV VIN> or <{*blank*}> as in <CCCCCCCCCCCCCCCCC>, or <-CCCCCCCCCCCCCCCCC> or <>.


*Disposition:* Mandatory for all ELDs linked to the engine ECM and when VIN is available from the engine ECM over the vehicle databus; otherwise optional. If optionally populated and source is not the engine ECM, precede VIN with the character “-” in records.


*Examples:* [1FUJGHDV0CLBP8834], [-1FUJGHDV0CLBP8896], [].


*Description:* This is a textual note related to a record, update, or edit capturing the comment or annotation a driver or authorized support personnel may input to the ELD.


*Purpose:* Provides ability for a driver to offer explanations to records, selections, edits, or entries.


*Source:* Driver or authorized support personnel.


*Used in:* ELD events; ELD outputs.


*Data Type:* Entered by the authenticated user via ELD's interface.


*Data Range:* Free form text of any alphanumeric combination.


*Data Length:* 0-60 characters if optionally entered; 4-60 characters if annotation is required and driver is prompted by the ELD.


*Data Format:* <Comment/Annotation> as in <{blank}> or <C> to <CCC. . . . . . CCC>.


*Disposition:* Optional in general; Mandatory if prompted by ELD.


*Examples:* [], [Personal Conveyance. Driving to Restaurant in bobtail mode], [Forgot to switch to SB. Correcting here].


*Description:* This is a Boolean indicator identifying whether the used ELD unit has an active data diagnostic event set for the authenticated driver at the time of event recording.


*Purpose:* Documents the snapshot of ELD's data diagnostic status for the authenticated driver at the time of an event recording.


*Source:* ELD internal monitoring functions.


*Used in:* ELD events; ELD outputs.


*Data Type:* Internally monitored and managed.


*Data Range:* 0 (no active data diagnostic events for the driver) or 1 (at least one active data diagnostic event set for the driver).


*Data Length:* 1 character.


*Data Format:* <Data Diagnostic Event Indicator Status> as in <C>.


*Disposition:* Mandatory.


*Examples:* [0] or [1].


*Description:* In combination with the variable “Time”, this parameter stamps records with a reference in time; even though date and time must be captured in UTC, event records must use date and time converted to the time zone in effect at the driver's home terminal as specified in section 4.4.3.


*Purpose:* Provides ability to record the instance of recorded events.


*Source:* ELD's converted time measurement.


*Used in:* ELD events; ELD outputs.


*Data Type:* UTC date must be automatically captured by ELD; date in effect at the driver's home terminal must be calculated as specified in section 4.4.3.


*Data Range:* Any valid date combination expressed in <MMDDYY> format where “MM” refers to months, “DD” refers to days of the month and “YY” refers to the last two digits of the calendar year.


*Data Length:* 6 characters.


*Data Format:* <MMDDYY> where <MM> must be between 01 and 12, <DD> must be between 01 and 31, and <YY> must be between 00 and 99.


*Disposition:* Mandatory.


*Examples:* [122815], [010114], [061228].


*Description:* Distance in whole miles traveled since the last valid latitude, longitude pair the ELD measured with the required accuracy.


*Purpose:* Provides ability to keep track of location for recorded events in cases of temporary position measurement outage.


*Source:* ELD internal calculations.


*Used in:* ELD events; ELD outputs.


*Data Type:* Kept track of by the ELD based on position measurement validity.


*Data Range:* An integer value between 0 and 6; If the distance traveled since the last valid coordinate measurement exceeds 6 miles, the ELD must enter the value as 6.


*Data Length:* 1 character.


*Data Format:* <Distance Since Last Valid Coordinates> as in <C>.


*Disposition:* Mandatory.


*Examples:* [0], [1], [5], [6].


*Description:* This data element refers to the issuing State, Province or jurisdiction of the listed Driver's License for the ELD account holder.


*Purpose:* In combination with “Driver's License Number”, it links the ELD driver account holder uniquely to an individual with driving credentials; ensures that only one driver account can be created per individual.


*Source:* Driver's license.


*Used in:* ELD account profile(s); ELD output file.


*Data Type:* Entered (during the creation of a new ELD account).


*Data Range:* To character abbreviation listed on Table 5 of this appendix.


*Data Length:* 2 characters.


*Data Format:* <Driver's License Issuing State> as in <CC>.


*Disposition:* Mandatory for all driver accounts created on the ELD; optional for “non-driver” accounts.


*Example:* [WA].


*Description:* This data element refers to the unique Driver's License information required for each driver account on the ELD.


*Purpose:* In combination with driver's license issuing State, it links the ELD driver account holder to an individual with driving credentials; ensures that only one driver account can be created per individual.


*Source:* Driver's license.


*Used in:* ELD account profile(s); ELD output file.


*Data Type:* Entered (during the creation of a new ELD account).


*Data Range:* Any alphanumeric combination.


*Data Length:* Minimum: 1; Maximum: 20 characters.


*Data Format:* <Driver's License Number> as in <C> to <CCCCCCCCCCCCCCCCCCCC>. For ELD record keeping purposes, ELD must only retain characters in a Driver's License Number entered during an account creation process that are a number between 0-9 or a character between A-Z (non-case sensitive).


*Disposition:* Mandatory for all driver accounts created on the ELD; optional for “non-driver” accounts.


*Examples:* [SAMPLMJ065LD], [D000368210361], [198], [N02632676353666].


*Description:* This is a textual note related to the location of the CMV input by the driver upon ELD's prompt.


*Purpose:* Provides ability for a driver to enter location information related to entry of missing records; provides ability to accommodate temporary positioning service interruptions or outage without setting positioning malfunctions.


*Source:* Driver, only when prompted by the ELD.


*Used in:* ELD events; ELD outputs.


*Data Type:* Entered by the authenticated driver when ELD solicits this information as specified in section 4.3.2.7.


*Data Range:* Free form text of any alphanumeric combination.


*Data Length:* 5-60 characters.


*Data Format:* <CCCCC> to <CCC......CCC>.


*Disposition:* Mandatory when prompted by ELD.


*Examples:* [], [5 miles SW of Indianapolis, IN], [Reston, VA].


*Description:* An indicator designating whether an ELD account is a driver account or support personnel (non-driver) account.


*Purpose:* Enables authorized safety officials to verify account type specific requirements set forth in this document.


*Source:* ELD designated.


*Used in:* ELD outputs.


*Data Type:* Specified during the account creation process and recorded on ELD.


*Data Range:* Character “D”, indicating account type “Driver”, or “S”, indicating account type “motor carrier's support personnel” (*i.e.* non-driver); “Unidentified Driver” account must be designated with type “D”.


*Data Length:* 1 character.


*Data Format:* <C>.


*Disposition:* Mandatory.


*Examples:* [D], [S].


*Description:* An alphanumeric value that is unique to an ELD and verifies the authenticity of the given ELD.


*Purpose:* Provides ability to cross-check the authenticity of an ELD used in the recording of a driver's records during inspections.


*Source:* ELD provider-assigned value; includes a certificate component and a hashed component; necessary information related to authentication keys and hash procedures disclosed by the registered ELD provider during the online ELD certification process for independent verification by FMCSA systems. For example, an ELD Authentication Value could be generated by creating a string that concatenates a predetermined selection of values that will be included in the ELD Output File, signing that string (using the ELD private key and a predetermined hash algorithm), then using a binary-to-text encoding algorithm to encode the signature into alphanumeric characters.


*Used in:* ELD outputs.


*Data Type:* Calculated from the authentication ELD provider's private key not provided to FMCSA but corresponding to the ELD provider's public key certificate and calculation procedure privately distributed by the ELD provider to FMCSA during the ELD registration process.


*Data Range:* Alphanumeric combination.


*Data Length:* Greater than 16 characters.


*Data Format:* <CCCC. . . . . . . . .CCCC>.


*Disposition:* Mandatory.


*Example:* [bGthamRrZmpha3NkamZsa2pzZGxma2phc2xka2Y7ajtza25rbCBucms7Y2 . . . RuZHNudm5hc21kbnZBU0RGS0xKQVNMS0RKTEs7QVNKRDtGTEtBSlNERktMSkFEU0w7S1NESkZMSw==].


*Description:* An alphanumeric identifier assigned by the ELD provider to the ELD technology that is certified by the registered provider at FMCSA's website.


*Purpose:* Provides ability to cross-check that the ELD used in the recording of a driver's records is certified through FMCSA's registration and certification process as required.


*Source:* Assigned and submitted by the ELD provider during the online certification of an ELD model and version.


*Used in:* ELD outputs.


*Data Type:* Coded on the ELD by the ELD provider and disclosed to FMCSA during the online certification process.


*Data Range:* A six character alphanumeric identifier using characters A-Z and number 0-9.


*Data Length:* 6 characters.


*Data Format:* <ELD Identifier> as in <CCCCCC>.


*Disposition:* Mandatory.


*Examples:* [1001ZE], [GAM112], [02P3P1].


*Description:* An alphanumeric company name of the technology provider as registered at the FMCSA's website.


*Purpose:* Provides ability to cross-check that the ELD used in the recording of a driver's records is certified through FMCSA's registration and certification process as required.


*Source:* Assigned and submitted by the ELD provider during the online registration process.


*Used in:* ELD outputs.


*Data Type:* Coded on the ELD by the ELD provider and disclosed to FMCSA during the online registration process.


*Data Range:* Any alphanumeric combination.


*Data Length:* Minimum: 4; Maximum 120 characters.


*Data Format:* <ELD Provider> as in <CCCC> to <CCCC......CCCC>.


*Disposition:* Mandatory.


*Examples:* [ELD PROVIDER INC].


*Description:* An alphanumeric registration identifier assigned to the ELD provider that is registered with FMCSA during the ELD registration process.


*Purpose:* Provides ability to cross-check that the ELD provider has registered as required.


*Source:* Received from FMCSA during online provider registration.


*Used in:* ELD outputs.


*Data Type:* Coded on the ELD by the provider.


*Data Range:* A four character alphanumeric registration identifier using characters A-Z and numbers 0-9.


*Data Length:* 4 characters.


*Data Format:* <ELD Registration ID> as in <CCCC>.


*Disposition:* Mandatory.


*Examples:* [ZA10], [QA0C], [FAZ2].


*Description:* This data element refers to the unique user identifier assigned to the account holder on the ELD to authenticate the corresponding individual during an ELD login process; the individual may be a driver or a motor carrier's support personnel.


*Purpose:* Documents the user identifier assigned to the driver linked to the ELD account.


*Source:* Assigned by the motor carrier during the creation of a new ELD account.


*Used in:* ELD account profile; event records; ELD login process.


*Data Type:* Entered (during account creation and user authentication).


*Data Range:* Any alphanumeric combination.


*Data Length:* Minimum: 4; Maximum: 60 characters.


*Data Format:* <ELD Username> as in <CCCC> to <CCCC......CCCC>.


*Disposition:* Mandatory for all accounts created on the ELD.


*Examples:* [smithj], [100384], [sj2345], [john.smith].




*Description:* This data element refers to the time the CMV's engine is powered in decimal hours with 0.1 hr (6-minute) resolution; this parameter is a placeholder for <{Total} Engine Hours>, which refers to the aggregated time of a vehicle's engine's operation since its inception, and used in recording “engine power on” and “engine shut down” events, and also for <{Elapsed} Engine Hours>, which refers to the elapsed time in the engine's operation in the given ignition power on cycle, and used in the recording of all other events.


*Purpose:* Provides ability to identify gaps in the operation of a CMV, when the vehicle's engine may be powered but the ELD may not; provides ability to cross check integrity of recorded data elements in events and prevent gaps in the recording of ELD.


*Source:* ELD measurement or sensing.


*Used in:* ELD events; ELD outputs.


*Data Type:* Acquired from the engine ECM or a comparable other source as allowed in section 4.3.1.4.


*Data Range:* For <{Total} Engine hours>, range is between 0.0 and 99999.9; for <{Elapsed} Engine hours>, range is between 0.0 and 99999.9.


*Data Length:* 3-7 characters.


*Data Format:* <Vehicle Miles> as in <C.C> to <CCCCC.C>.


*Disposition:* Mandatory for any event whose origin is the ELD or the unidentified driver profile. For events created by the driver or another authenticated user when engine hours are not available and cannot accurately be determined this field can be blank.


*Examples:* [0.0], [9.9], [346.1], [2891.4].


*Description:* A dependent attribute on “Event Type” parameter that further specifies the nature of the change indicated in “Event Type”; this parameter indicates the new status after the change.


*Purpose:* Provides ability to code the specific nature of the change electronically.


*Source:* ELD internal calculations.


*Used in:* ELD event records; ELD outputs.


*Data Type:* ELD recorded and maintained event attribute in accordance with the type of event and nature of the new status being recorded.


*Data Range:* Dependent on the “Event Type” as indicated on Table 6 of this appendix.


*Data Length:* 1 character.


*Data Format:* <Event Type> as in <C>.


*Disposition:* Mandatory.


*Examples:* [0], [1], [4], [9].


*Description:* A hexadecimal “check” value calculated in accordance with the procedure outlined in section 4.4.5.1 of this appendix and attached to each event record at the time of recording.


*Purpose:* Provides ability to identify cases where an ELD event record may have been inappropriately modified after its original recording.


*Source:* ELD internal.


*Used in:* ELD events; ELD output file.


*Data Type:* Calculated by the ELD in accordance with section 4.4.5.1 of this appendix.


*Data Range:* A number between hexadecimal 00 (decimal 0) and hexadecimal FF (decimal 255).


*Data Length:* 2 characters.


*Data Format:* <Event Data Check Value> as in <CC>.


*Disposition:* Mandatory.


*Examples:* [05], [CA], [F3].


*Description:* An attribute for the event record indicating whether it is automatically recorded, or edited, entered or accepted by the driver, requested by another authenticated user, or assumed from unidentified driver profile.


*Purpose:* Provides ability to track origin of the records.


*Source:* ELD internal calculations.


*Used in:* ELD event records; ELD outputs.


*Data Type:* ELD recorded and maintained event attribute in accordance with the procedures outlined in sections 4.4.4.2.2, 4.4.4.2.3, 4.4.4.2.4, 4.4.4.2.5, and 4.4.4.2.6 of this appendix.


*Data Range:* 1, 2, 3 or 4 as described on Table 7 of this appendix.


*Data Length:* 1 character.


*Data Format:* <Event Record Origin> as in <C>.


*Disposition:* Mandatory.


*Examples:* [1], [2], [3], [4].


*Description:* An attribute for the event record indicating whether an event is active or inactive and further, if inactive, whether it is due to a change or lack of confirmation by the driver or due to a driver's rejection of change request.


*Purpose:* Provides ability to keep track of edits and entries performed over ELD records while retaining original records.


*Source:* ELD internal calculations.


*Used in:* ELD event records; ELD outputs.


*Data Type:* ELD recorded and maintained event attribute in accordance with the procedures outlined in sections 4.4.4.2.2, 4.4.4.2.3, 4.4.4.2.4, 4.4.4.2.5, and 4.4.4.2.6 of this appendix.


*Data Range:* 1, 2, 3 or 4 as described on Table 8 of this appendix.


*Data Length:* 1 character.


*Data Format:* <Event Record Status> as in <C>.


*Disposition:* Mandatory.


*Examples:* [1], [2], [3], [4].


*Description:* This data element refers to the serial identifier assigned to each required ELD event as described in section 4.5.1 of this appendix.


*Purpose:* Provides ability to keep a continuous record, on a given ELD, across all users of that ELD.


*Source:* ELD internal calculations.


*Used in:* ELD event records; ELD outputs.


*Data Type:* ELD maintained; incremented by 1 for each new record on the ELD; continuous for each new event the ELD records regardless of owner of the records.


*Data Range:* 0 to FFFF; initial factory value must be 0; after FFFF hexadecimal (decimal 65535), the next Event Sequence ID number must be 0.


*Data Length:* 1-4 characters.


*Data Format:* <Event Sequence ID Number> as in <C> to <CCCC>.


*Disposition:* Mandatory.


*Examples:* [1], [1F2C], p2D3], [BB], [FFFE].


*Description:* An attribute specifying the type of the event record.


*Purpose:* Provides ability to code the type of the recorded event in electronic format.


*Source:* ELD internal calculations.


*Used in:* ELD event records; ELD outputs.


*Data Type:* ELD recorded and maintained event attribute in accordance with the type of event being recorded.


*Data Range:* 1-7 as described on Table 9 of this appendix.


*Data Length:* 1 character.


*Data Format:* <Event Type> as in <C>.


*Disposition:* Mandatory.


*Examples:* [1], [5], [4], [7].


*Description:* A parameter indicating whether the motor carrier configured a driver's profile to claim exemption from ELD use.


*Purpose:* Provides ability to code the motor carrier-indicated exemption for the driver electronically.


*Source:* Motor carrier's configuration for a given driver.


*Used in:* ELD outputs.


*Data Type:* Motor carrier configured and maintained parameter in accordance with the qualification requirements listed in § 395.1.


*Data Range:* E (exempt) or 0 (number zero).


*Data Length:* 1 character.


*Data Format:* <Exempt Driver Configuration> as in <C>.


*Disposition:* Mandatory.


*Examples:* [E], [0].


*Description:* A hexadecimal “check” value calculated in accordance with the procedure outlined in section 4.4.5.3 of this appendix and attached to each ELD output file.


*Purpose:* Provides ability to identify cases where an ELD file may have been inappropriately modified after its original creation.


*Source:* ELD internal.


*Used in:* ELD output files.


*Data Type:* Calculated by the ELD in accordance with section 4.4.5.3 of this appendix.


*Data Range:* A number between hexadecimal 0000 (decimal 0) and hexadecimal FFFF (decimal 65535).


*Data Length:* 4 characters.


*Data Format:* <File Data Check Value> as in <CCCC>.


*Disposition:* Mandatory.


*Examples:* [F0B5], [00CA], [523E].


*Description:* This data element refers to the given name of the individual holding an ELD account.


*Purpose:* Links an individual to the associated ELD account.


*Source:* Driver's license for driver accounts; driver's license or government-issued ID for support personnel accounts.


*Used in:* ELD account profile(s); ELD outputs (display and file).


*Data Type:* Entered (during the creation of a new ELD account).


*Data Range:* Any alphanumeric combination.


*Data Length:* Minimum: 2; Maximum: 30 characters.


*Data Format:* <First Name> as in <CC> to <CC......CC> where “C” denotes a character.


*Disposition:* Mandatory for all accounts created on the ELD.


*Example:* [John].


*Description:* A descriptive indicator of the CMV position in terms of a distance and direction to a recognizable location derived from a GNIS database at a minimum containing all cities, towns and villages with a population of 5,000 or greater.


*Purpose:* Provide recognizable location information on a display or printout to users of the ELD.


*Source:* ELD internal calculations as specified in section 4.4.2 of this appendix.


*Used in:* ELD display or printout.


*Data Type:* Identified from the underlying latitude/longitude coordinates by the ELD.


*Data Range:* Contains four segments in one text field; a recognizable location driven from GNIS database containing—at a minimum—all cities, towns and villages with a population of 5,000 in text format containing a location name and the State abbreviation, distance from this location and direction from this location.


*Data Length:* Minimum: 5; Maximum: 60 characters.


*Data Format:* <Distance from {*identified*} Geo-location> <'mi `> <Direction from {*identified*} Geo-location> <' `> <State Abbreviation {*of identified*} Geo Location> <' `> <Place name of {*identified*} Geo-location> where:


*Disposition:* Mandatory.


*Examples:* [2mi ESE IL Darien], [1mi SE TX Dallas], [11mi NNW IN West Lafayette].


*Description:* This data element refers to the last name of the individual holding an ELD account.


*Purpose:* Links an individual to the associated ELD account.


*Source:* Driver's license for driver accounts; driver's license or government-issued ID for support personnel accounts.


*Used in:* ELD account profile(s); ELD outputs (display and file).


*Data Type:* Entered (during the creation of a new ELD account).


*Data Range:* Any alphanumeric combination.


*Data Length:* Minimum: 2; Maximum: 30 characters.


*Data Format:* <Last Name> as in <CC> to <CC.....CC>.


*Disposition:* Mandatory for all accounts created on the ELD.


*Example:* [Smith].


*Description:* An angular distance in degrees north and south of the equator.


*Purpose:* In combination with the variable “Longitude”, this parameter stamps records requiring a position attribute with a reference point on the face of the earth.


*Source:* ELD's position measurement.


*Used in:* ELD events; ELD outputs.


*Data Type:* Latitude and Longitude must be automatically captured by the ELD.


*Data Range:* X, M, E or −90.00 to 90.00 in decimal degrees (two decimal point resolution) in records using conventional positioning precision; −90.0 to 90.0 in decimal degrees (single decimal point resolution) in records using reduced positioning precision when allowed; latitudes north of the equator must be specified by the absence of a minus sign (−) preceding the digits designating degrees; latitudes south of the Equator must be designated by a minus sign (−) preceding the digits designating degrees.


*Data Length:* 1, or 3 to 6 characters.


*Data Format:* <C> or First character: [<'-'> or <{blank}>]; then [<C> or <CC>]; then <'.'>; then [<C> or <CC>].


*Disposition:* Mandatory.


*Examples:* [X], [M], [E], [−15.68], [38.89], [5.07], [−6.11], [−15.7], [38.9], [5.1], [−6.1].


*Description:* A hexadecimal “check” value calculated in accordance with procedure outlined in section 4.4.5.2 and attached to each line of output featuring data at the time of output file being generated.


*Purpose:* Provides ability to identify cases where an ELD output file may have been inappropriately modified after its original generation.


*Source:* ELD internal.


*Used in:* ELD output file.


*Data Type:* Calculated by the ELD in accordance with 4.4.5.2.


*Data Range:* A number between hexadecimal 00 (decimal 0) and hexadecimal FF (decimal 255) .


*Data Length:* 2 characters.


*Data Format:* <Line Data Check Value> as in <CC>.


*Disposition:* Mandatory.


*Examples:* [01], [A4], [CC].


*Description:* An angular distance in degrees measured on a circle of reference with respect to the zero (or prime) meridian; The prime meridian runs through Greenwich, England.


*Purpose:* In combination with the variable “Latitude”, this parameter stamps records requiring a position attribute with a reference point on the face of the earth.


*Source:* ELD's position measurement.


*Used in:* ELD events; ELD outputs.


*Data Type:* Latitude and Longitude must be automatically captured by the ELD.


*Data Range:* X, M, E or −179.99 to 180.00 in decimal degrees (two decimal point resolution) in records using conventional positioning precision; −179.9 to 180.0 in decimal degrees (single decimal point resolution) in records using reduced positioning precision when allowed; longitudes east of the prime meridian must be specified by the absence of a minus sign (−) preceding the digits designating degrees of longitude; longitudes west of the prime meridian must be designated by minus sign (−) preceding the digits designating degrees.


*Data Length:* 1, or 3 to 7 characters.


*Data Format:* <C> or First character: [<`-'> or <{blank}>]; then [<C>, <CC> or <CCC>]; then <`.'>; then [<C> or <CC>].


*Disposition:* Mandatory.


*Examples:* [X], [M], [E], [−157.81], [−77.03], [9.05], [−0.15], [−157.8], [−77.0], [9.1], [−0.2].


*Description:* A code that further specifies the underlying malfunction or data diagnostic event.


*Purpose:* Enables coding the type of malfunction and data diagnostic event to cover the standardized set in Table 4 of this appendix.


*Source:* ELD internal monitoring.


*Used in:* ELD events; ELD outputs.


*Data Type:* Recorded by ELD when malfunctions and data diagnostic events are set or reset.


*Data Range:* As specified in Table 4 of this appendix.


*Data Length:* 1 character.


*Data Format:* <C>.


*Disposition:* Mandatory.


*Examples:* [1], [5], [P], [L].


*Description:* This is a Boolean indicator identifying whether the used ELD unit has an active malfunction set at the time of event recording.


*Purpose:* Documents the snapshot of ELD's malfunction status at the time of an event recording.


*Source:* ELD internal monitoring functions.


*Used in:* ELD events; ELD outputs.


*Data Type:* Internally monitored and managed.


*Data Range:* 0 (no active malfunction) or 1 (at least one active malfunction).


*Data Length:* 1 character.


*Data Format:* <Malfunction Indicator Status> as in <C>.


*Disposition:* Mandatory.


*Examples:* [0] or [1].


*Description:* This data element refers to the multiday basis (7 or 8 days) used by the motor carrier to compute cumulative duty hours.


*Purpose:* Provides ability to apply the HOS rules accordingly.


*Source:* Motor carrier.


*Used in:* ELD account profile; ELD outputs.


*Data Type:* Entered by the motor carrier during account creation process.


*Data Range:* 7 or 8.


*Data Length:* 1 character.


*Data Format:* <Multiday basis used> as in <C>.


*Disposition:* Mandatory.


*Examples:* [7], [8].


*Description:* A continuous integer number assigned in the forming of a list, starting at 1 and incremented by 1 for each unique item on the list.


*Purpose:* Allows for more compact report file output generation avoiding repetitious use of CMV identifiers and usernames affected in records.


*Source:* ELD internal.


*Used in:* ELD outputs, listing of users and CMVs referenced in ELD logs.


*Data Type:* Managed by ELD.


*Data Range:* Integer between 1 and 99.


*Data Length:* 1-2 characters.


*Data Format:* <Order Number> as in <C> or <CC>.


*Disposition:* Mandatory.


*Examples:* [1], [5], [11], [28].


*Description:* A textual field that may be populated with information pertaining to the created ELD output file; An authorized safety official may provide a key phrase or code to be included in the output file comment, which may be used to link the requested data to an inspection, inquiry, or other enforcement action; if provided to the driver by an authorized safety official, it must be entered into the ELD and included in the exchanged dataset as specified.


*Purpose:* The output file comment field provides an ability to link submitted data to an inspection, inquiry, or other enforcement action, if deemed necessary; further, it may also link a dataset to a vehicle, driver, carrier, and/or ELD that may participate in voluntary future programs that may involve exchange of ELD data.


*Source:* Enforcement personnel or driver or motor carrier.


*Used in:* ELD outputs.


*Data Type:* If provided, output file comment is entered or appended to the ELD dataset prior to submission of ELD data to enforcement.


*Data Range:* Blank or any alphanumeric combination specified and provided by an authorized safety official.


*Data Length:* 0-60 characters.


*Data Format:* <{blank}>, or <C> thru <CCCC......CCCC>.


*Disposition:* Mandatory.


*Examples:* [], [3BHG701015], [113G1EFW02], [7353930].


*Description:* Shipping document number the motor carrier uses in their system and dispatch documents.


*Purpose:* Links ELD data to the shipping records; makes ELD dataset consistent with § 395.8 requirements.


*Source:* Motor carrier.


*Used in:* ELD outputs.


*Data Type:* Entered in the ELD by the authenticated driver or motor carrier and verified by the driver.


*Data Range:* Any alphanumeric combination.


*Data Length:* 0-40 characters.


*Data Format:* <{blank}>, or <C> thru <CCCC......CCCC>.


*Disposition:* Mandatory if a shipping number is used on motor carrier's system.


*Examples:* [], [B 75354], [FX334411707].


*Description:* In combination with the variable “Date”, this parameter stamps records with a reference in time; even though date and time must be captured in UTC, event records must use date and time converted to the time zone in effect at the driver's home terminal as specified in section 4.4.3 of this appendix.


*Purpose:* Provides ability to record the instance of recorded events.


*Source:* ELD's converted time measurement.


*Used in:* ELD events; ELD outputs.


*Data Type:* UTC time must be automatically captured by ELD; time in effect at the driver's home terminal must be calculated as specified in section 4.4.3 of this appendix.


*Data Range:* Any valid date combination expressed in <HHMMSS> format where “HH” refers to hours of the day, “MM” refers to minutes, and “SS” refers to seconds.


*Data Length:* 6 characters.


*Data Format:* <HHMMSS> where <HH> must be between 00 and 23, <MM> and <SS> must be between 00 and 59.


*Disposition:* Mandatory.


*Examples:* {070111}, {001259}, {151522}, {230945}.


*Description:* This data element refers to the offset in time between UTC time and the time standard in effect at the driver's home terminal.


*Purpose:* Establishes the ability to link records stamped with local time to a universal reference.


*Source:* Calculated from measured variable <{*UTC*} Time> and <{*Time Standard in Effect at driver's home terminal*} Time>; Maintained together with “24-hour Period Starting Time” parameter by the motor carrier or tracked automatically by ELD.


*Used in:* ELD account profile; ELD event: Driver's certification of own records.


*Data Type:* Programmed or populated on the ELD during account creation and maintained by the motor carrier or ELD to reflect true and accurate information for drivers. This parameter must adjust for Daylight Saving Time changes in effect at the driver's home terminal.


*Data Range:* 04 to 11; omit sign.


*Data Length:* 2 characters.


*Data Format:* <Time Zone Offset from UTC> as in <HH> where “HH” refer to hours in difference.


*Disposition:* Mandatory.


*Examples:* {04}, {05}, {10}.


*Description:* This data element refers to the identifier(s) the motor carrier uses for the trailers in their normal course of business.


*Purpose:* Identifies the trailer(s) a driver operates while a driver's ELD records are recorded; makes ELD records consistent with § 395.8 which requires the trailer number(s) to be included on the form.


*Source:* Unique trailer identifiers a motor carrier uses in their normal course of business and includes on dispatch documents, or the license number and licensing State of each towed unit; trailer number(s) must be updated each time hauled trailers change.


*Data Type:* Automatically captured by the ELD or populated by motor carrier's extended ELD system or entered by the driver; must be updated each time the hauled trailer(s) change.


*Data Range:* Any alphanumeric combination.


*Data Length:* Minimum: blank; Maximum: 32 characters (3 trailer numbers each maximum 10 characters long, separated by spaces).


*Data Format:* Trailer numbers; separated by space in case of multiple trailers hauled at one time; field to be left “blank” for non-combination vehicles (such as a straight truck or bobtail tractor).


*Disposition:* Mandatory when operating combination vehicles.


*Examples:* {987}, {00987 PP2345}, {BX987 POP712 10567}, {TX12345 LA22A21}.


*Description:* This data element refers to the distance traveled using the CMV in whole miles; this parameter is a placeholder for <{Total} Vehicle Miles>, which refers to the odometer reading and is used in recording “engine power on” and “engine shut down” events, and also for <{Accumulated} Vehicle Miles>, which refers to the accumulated miles in the given ignition power on cycle and is used in the recording of all other events.


*Purpose:* Provides ability to track distance traveled while operating the CMV in each duty status. Total miles traveled within a 24-hour period is a required field in § 395.8.


*Source:* ELD measurement or sensing.


*Used in:* ELD events; ELD outputs.


*Data Type:* Acquired from the engine ECM or a comparable other source as allowed in section 4.3.1.3.


*Data Range:* For <{Total} Vehicle Miles>, range is between 0 and 9,999,999; for <{Accumulated} Vehicle Miles>, range is between 0 and 9,999.


*Data Length:* 1-7 characters.


*Data Format:* <Vehicle Miles> as in <C> to <CCCCCCC>.


*Disposition:* Mandatory for any event whose origin is the ELD or the unidentified driver profile. For events created by the driver or another authenticated user when vehicle miles are not available and cannot accurately be determined this field can be blank.


*Examples:* [99], [1004566], [0], [422].



---

[N] [80 FR 78385, Dec. 16, 2015, as amended at 83 FR 22879, May 17, 2018; 86 FR 57077, Oct. 14, 2021; 88 FR 80192, Nov. 17, 2023]




