# Appendix C to Part 236—Safety Assurance Criteria and Processes


(a) *What is the purpose of this appendix?* This appendix provides safety criteria and processes that the designer must use to develop and validate the product that meets safety requirements of this part. FRA uses the criteria and processes set forth in this appendix to evaluate the validity of safety targets and the results of system safety analyses provided in the RSPP, PSP, PTCIP, PTCDP, and PTCSP documents as appropriate. An analysis performed under this appendix must:


(1) Address each of the safety principles of paragraph (b) of this appendix, or explain why they are not relevant, and


(2) Employ a validation and verification process pursuant to paragraph (c) of this appendix.


(b) *What safety principles must be followed during product development?* The designer shall address each of the following safety considerations principles when designing and demonstrating the safety of products covered by subpart H or I of this part. In the event that any of these principles are not followed, the PSP or PTCDP or PTCSP shall state both the reason(s) for departure and the alternative(s) utilized to mitigate or eliminate the hazards associated with the design principle not followed.


(1) *System safety under normal operating conditions.* The system (all its elements including hardware and software) must be designed to assure safe operation with no hazardous events under normal anticipated operating conditions with proper inputs and within the expected range of environmental conditions. All safety-critical functions must be performed properly under these normal conditions. The system shall operate safely even in the absence of prescribed operator actions or procedures. The designer must identify and categorize all hazards that may lead to unsafe system operation. Hazards categorized as unacceptable, which are determined by hazard analysis, must be eliminated by design. Best effort shall also be made by the designer to eliminate by design the hazards categorized as undesirable. Those undesirable hazards that cannot be eliminated should be mitigated to the acceptable level as required by this part.


(2) *System safety under failures.*

(i) It must be shown how the product is designed to eliminate or mitigate unsafe systematic failures—those conditions which can be attributed to human error that could occur at various stages throughout product development. This includes unsafe errors in the software due to human error in the software specification, design, or coding phases; human errors that could impact hardware design; unsafe conditions that could occur because of an improperly designed human-machine interface; installation and maintenance errors; and errors associated with making modifications.


(ii) The product must be shown to operate safely under conditions of random hardware failures. This includes single hardware failures as well as multiple hardware failures that may occur at different times but remain undetected (latent) and react in combination with a subsequent failure at a later time to cause an unsafe operating situation. In instances involving a latent failure, a subsequent failure is similar to there being a single failure. In the event of a transient failure, and if so designed, the system should restart itself if it is safe to do so. Frequency of attempted restarts must be considered in the hazard analysis required by § 236.907(a)(8).


(iii) There shall be no single point failures in the product that can result in hazards categorized as unacceptable or undesirable. Occurrence of credible single point failures that can result in hazards must be detected and the product must achieve a known safe state that eliminates the possibility of false activation of any physical appliance.


(iv) If one non-self-revealing failure combined with a second failure can cause a hazard that is categorized as unacceptable or undesirable, then the second failure must be detected and the product must achieve a known safe state that eliminates the possibility of false activation of any physical appliance.


(v) Another concern of multiple failures involves common mode failures in which two or more subsystems or components intended to compensate one another to perform the same function all fail by the same mode and result in unsafe conditions. This is of particular concern in instances in which two or more elements (hardware or software, or both) are used in combination to ensure safety. If a common mode failure exists, then any analysis performed under this appendix cannot rely on the assumption that failures are independent. Examples include: The use of redundancy in which two or more elements perform a given function in parallel and when one (hardware or software) element checks/monitors another element (of hardware or software) to help ensure its safe operation. Common mode failure relates to independence, which must be ensured in these instances. When dealing with the effects of hardware failure, the designer shall address the effects of the failure not only on other hardware, but also on the execution of the software, since hardware failures can greatly affect how the software operates.


(3) *Closed loop principle.* System design adhering to the closed loop principle requires that all conditions necessary for the existence of any permissive state or action be verified to be present before the permissive state or action can be initiated. Likewise the requisite conditions shall be verified to be continuously present for the permissive state or action to be maintained. This is in contrast to allowing a permissive state or action to be initiated or maintained in the absence of detected failures. In addition, closed loop design requires that failure to perform a logical operation, or absence of a logical input, output or decision shall not cause an unsafe condition, i.e. system safety does not depend upon the occurrence of an action or logical decision.


(4) *Safety assurance concepts.* The product design must include one or more of the following Safety Assurance Concepts as described in IEEE-1483 standard to ensure that failures are detected and the product is placed in a safe state. One or more different principles may be applied to each individual subsystem or component, depending on the safety design objectives of that part of the product.


(i) *Design diversity and self-checking concept.* This concept requires that all critical functions be performed in diverse ways, using diverse software operations and/or diverse hardware channels, and that critical hardware be tested with Self-Checking routines. Permissive outputs are allowed only if the results of the diverse operations correspond, and the Self-Checking process reveals no failures in either execution of software or in any monitored input or output hardware. If the diverse operations do not agree or if the checking reveals critical failures, safety-critical functions and outputs must default to a known safe state.


(ii) *Checked redundancy concept.* The Checked Redundancy concept requires implementation of two or more identical, independent hardware units, each executing identical software and performing identical functions. A means is to be provided to periodically compare vital parameters and results of the independent redundant units, requiring agreement of all compared parameters to assert or maintain a permissive output. If the units do not agree, safety-critical functions and outputs must default to a known safe state.


(iii) *N-version programming concept.* This concept requires a processor-based product to use at least two software programs performing identical functions and executing concurrently in a cycle. The software programs must be written by independent teams, using different tools. The multiple independently written software programs comprise a redundant system, and may be executed either on separate hardware units (which may or may not be identical) or within one hardware unit. A means is to be provided to compare the results and output states of the multiple redundant software systems. If the system results do not agree, then the safety-critical functions and outputs must default to a known safe state.


(iv) *Numerical assurance concept.* This concept requires that the state of each vital parameter of the product or system be uniquely represented by a large encoded numerical value, such that permissive results are calculated by pseudo-randomly combining the representative numerical values of each of the critical constituent parameters of a permissive decision. Vital algorithms must be entirely represented by data structures containing numerical values with verified characteristics, and no vital decisions are to be made in the executing software, only by the numerical representations themselves. In the event of critical failures, the safety-critical functions and outputs must default to a known safe state.


(v) *Intrinsic fail-safe design concept.* Intrinsically fail-safe hardware circuits or systems are those that employ discrete mechanical and/or electrical components. The fail-safe operation for a product or subsystem designed using this principle concept requires a verification that the effect of every relevant failure mode of each component, and relevant combinations of component failure modes, be considered, analyzed, and documented. This is typically performed by a comprehensive failure modes and effects analysis (FMEA) which must show no residual unmitigated failures. In the event of critical failures, the safety-critical functions and outputs must default to a known safe state.


(5) *Human factor engineering principle.* The product design must sufficiently incorporate human factors engineering that is appropriate to the complexity of the product; the educational, mental, and physical capabilities of the intended operators and maintainers; the degree of required human interaction with the component; and the environment in which the product will be used.


(6) *System safety under external influences.* The product must be shown to operate safely when subjected to different external influences, including:


(i) Electrical influences such as power supply anomalies/transients, abnormal/improper input conditions (e.g., outside of normal range inputs relative to amplitude and frequency, unusual combinations of inputs) including those related to a human operator, and others such as electromagnetic interference or electrostatic discharges, or both;


(ii) Mechanical influences such as vibration and shock; and


(iii) Climatic conditions such as temperature and humidity.


(7) *System safety after modifications.* Safety must be ensured following modifications to the hardware or software, or both. All or some of the concerns identified in this paragraph may be applicable depending upon the nature and extent of the modifications. Such modifications must follow all of the concept, design, implementation and test processes and principles as documented in the PSP for the original product. Regression testing must be comprehensive and documented to include all scenarios which are affected by the change made, and the operating modes of the changed product during normal and failure state (fallback) operation.


(c) *What standards are acceptable for Verification and Validation?* (1) The standards employed for Verification or Validation, or both, of products subject to this subpart must be sufficient to support achievement of the applicable requirements of subpart H and subpart I of this part.


(2) U.S. Department of Defense Military Standard (MIL-STD) 882C, “System Safety Program Requirements” (January 19, 1993), is recognized as providing appropriate risk analysis processes for incorporation into verification and validation standards.


(3) The following standards designed for application to processor-based signal and train control systems are recognized as acceptable with respect to applicable elements of safety analysis required by subpart H and subpart I of this part. The latest versions of the standards listed below should be used unless otherwise provided.


(i) IEEE standards as follows:


(A) IEEE 1483-2000, Standard for the Verification of Vital Functions in Processor-Based Systems Used in Rail Transit Control.


(B) IEEE 1474.2-2003, Standard for user interface requirements in communications based train control (CBTC) systems.


(C) IEEE 1474.1-2004, Standard for Communications-Based Train Control (CBTC) Performance and Functional Requirements.


(ii) CENELEC Standards as follows:


(A) EN50129: 2003, Railway Applications: Communications, Signaling, and Processing Systems-Safety Related Electronic Systems for Signaling; and


(B) EN50155:2001/A1:2002, Railway Applications: Electronic Equipment Used in Rolling Stock.


(iii) ATCS Specification 200 Communications Systems Architecture.


(iv) ATCS Specification 250 Message Formats.


(v) AREMA 2009 Communications and Signal Manual of Recommended Practices, Part 16, Part 17, 21, and 23.


(vi) Safety of High-Speed Ground Transportation Systems. Analytical Methodology for Safety Validation of Computer Controlled Subsystems. Volume II: Development of a Safety Validation Methodology. Final Report September 1995. Author: Jonathan F. Luedeke, Battelle. DOT/FRA/ORD-95/10.2.


(vii) IEC 61508 (International Electrotechnical Commission), Functional Safety of Electrical/Electronic/Programmable/Electronic Safety (E/E/P/ES) Related Systems, Parts 1-7 as follows:


(A) IEC 61508-1 (1998-12) Part 1: General requirements and IEC 61508-1 Corr. (1999-05) Corrigendum 1—Part 1: General Requirements.


(B) IEC 61508-2 (2000-05) Part 2: Requirements for electrical/electronic/programmable electronic safety-related systems.


(C) IEC 61508-3 (1998-12) Part 3: Software requirements and IEC 61508-3 Corr. 1 (1999-04) Corrigendum 1—Part 3: Software requirements.


(D) IEC 61508-4 (1998-12) Part 4: Definitions and abbreviations and IEC 61508-4 Corr. 1 (1999-04) Corrigendum 1—Part 4: Definitions and abbreviations.


(E) IEC 61508-5 (1998-12) Part 5: Examples of methods for the determination of safety integrity levels and IEC 61508-5 Corr. 1 (1999-04) Corrigendum 1—Part 5: Examples of methods for determination of safety integrity levels.


(F) IEC 61508-6 (2000-04) Part 6: Guidelines on the applications of IEC 61508-2 and -3.


(G) IEC 61508-7 (2000-03) Part 7: Overview of techniques and measures.


(H) IEC 62278: 2002, Railway Applications: Specification and Demonstration of Reliability, Availability, Maintainability and Safety (RAMS);


(I) IEC 62279: 2002 Railway Applications: Software for Railway Control and Protection Systems;


(4) Use of unpublished standards, including proprietary standards, is authorized to the extent that such standards are shown to achieve the requirements of this part. However, any such standards shall be available for inspection and replication by FRA and for public examination in any public proceeding before the FRA to which they are relevant.


(5) The various standards provided in this paragraph are for illustrative purposes only. Copies of these standards can be obtained in accordance with the following:


(i) U.S. government standards and technical publications may be obtained by contacting the federal National Technical Information Service, 5301 Shawnee Rd, Alexandria, VA 22312.


(ii) U.S. National Standards may be obtained by contacting the American National Standards Institute, 25 West 43rd Street, 4 Floor, New York, NY 10036.


(iii) IEC Standards may be obtained by contacting the International Electrotechnical Commission, 3, rue de Varembé, P.O. Box 131 CH—1211, GENEVA, 20, Switzerland.


(iv) CENLEC Standards may be obtained by contacting any of one the national standards bodies that make up the European Committee for Electrotechnical Standardization.


(v) IEEE standards may be obtained by contacting the IEEE Publications Office, 10662 Los Vaqueros Circle, P.O. Box 3014, Los Alamitos, CA 90720-1264.


(vi) AREMA standards may be obtained from the American Railway Engineering and Maintenance-of-Way Association, 10003 Derekwood Lane, Suite 210, Lanham, MD 20706.



---

[N] [75 FR 2718, Jan. 15, 2010]




