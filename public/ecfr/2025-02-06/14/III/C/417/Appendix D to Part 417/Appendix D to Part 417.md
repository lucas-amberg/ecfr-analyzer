# Appendix D to Part 417—Flight Termination Systems, Components, Installation, and Monitoring


This appendix applies to each flight termination system and the components that make up the system for each launch. Section 417.301 requires that a launch operator's flight safety system include a flight termination system that complies with this appendix. Section 417.301 also contains requirements that apply to a launch operator's demonstration of compliance with the requirements of this appendix.


(a) When a flight safety system terminates the flight of a vehicle because it has either violated a flight safety rule as defined in § 417.113 or the vehicle inadvertently separates or destructs as described in section D417.11, a flight termination system must:


(1) Render each propulsion system that has the capability of reaching a populated or other protected area, incapable of propulsion, without significant lateral or longitudinal deviation in the impact point. This includes each stage and any strap on motor or propulsion system that is part of any payload;


(2) Terminate the flight of any inadvertently or prematurely separated propulsion system capable of reaching a populated or other protected area;


(3) Destroy the pressure integrity of any solid propellant system to terminate all thrust or ensure that any residual thrust causes the propulsion system to tumble without significant lateral or longitudinal deviation in the impact point; and


(4) Disperse any liquid propellant, whether by rupturing the propellant tank or other equivalent method, and initiate burning of any toxic liquid propellant.


(b) A flight termination system must not cause any solid or liquid propellant to detonate.


(c) The flight termination of a propulsion system must not interfere with the flight termination of any other propulsion system.


(a) *Reliability prediction.* A flight termination system must have a predicted reliability of 0.999 at a confidence level of 95 percent. A launch operator must demonstrate the system's predicted reliability by satisfying the requirements for system reliability analysis of § 417.309(b).


(b) *Single fault tolerance.* A flight termination system, including monitoring and checkout circuits, must not have a single failure point that would:


(1) Inhibit functioning of the system during flight; or


(2) Produce an inadvertent initiation of the system that would endanger the public.


(c) *Redundancy.* A flight termination system must use redundant components that are structurally, electrically, and mechanically separated. Each redundant component's mounting on a launch vehicle, including location or orientation, must ensure that any failure that will damage, destroy or otherwise inhibit the operation of one redundant component will not inhibit the operation of the other redundant component and will not inhibit functioning of the system. Each of the following exceptions applies:


(1) Any linear shaped charge need not be redundant if it initiates at both ends, and the initiation source for one end is not the same as the initiation source for the other end; or


(2) Any passive component such as an antenna or radio frequency coupler need not be redundant if it satisfies the requirements of this appendix.


(d) *System independence.* A flight termination system must operate independently of any other launch vehicle system. The failure of another launch vehicle system must not inhibit the functioning of a flight termination system. A flight termination system may share a component with another launch vehicle system, only if the launch operator demonstrates that sharing the component will not degrade the flight termination system's reliability. A flight termination system may share a connection with another system if the connection must exist to satisfy a flight termination system requirement, such as any connection needed to:


(1) Accomplish flight termination system arming and safing;


(2) Provide data to the telemetry system; or


(3) Accomplish any engine shut-down.


(e) *Performance specifications for components and parts.* Each flight termination system component and each part that can affect the reliability of a flight termination component during flight must have written performance specifications that show, and contain the details of, how the component or part satisfies the requirements of this appendix.


(f) *Ability to test.* A flight termination system, including each component and associated ground support and monitoring equipment, must satisfy the tests required by appendix E of this part.


(g) *Software safety critical functions.* The requirements of § 417.123 apply to any computing system, software or firmware that is associated with a flight termination system and performs a software safety critical function as defined in § 417.123.


(h) *Component storage, operating, and service life.* Each flight termination system component must have a specified storage life, operating life, and service life and must satisfy all of the following:


(1) Each component must satisfy all its performance specifications when subjected to the full length of its specified storage life, operating life, and service life; and


(2) A component's storage, operating, or service life must not expire before flight. A launch operator may extend an ordnance component's service life by satisfying the service life extension tests of appendix E of this part.


(i) *Consistency of components.* A launch operator must ensure that each flight component sample is manufactured using parts, materials, processes, quality controls, and procedures that are each consistent with the manufacture of each qualification test sample.


(a) *General.* A flight termination system, including all of its components, mounting hardware, cables, and wires, must each satisfy all of their performance specifications when subjected to each maximum predicted operating and non-operating environment and environmental design margin required by this appendix. As an alternative to subjecting the flight termination system to the maximum predicted environments and margin for each dynamic operating environment, such as vibration or shock, a flight termination system need only satisfy all its performance specifications when subjected to an environmental level greater than the level that would cause structural breakup of the launch vehicle.


(b) *Maximum predicted environments.* A launch operator must determine all maximum predicted non-operating and operating environments that a flight termination system, including each component, will experience before its safe flight state. This determination must be based on analysis, modeling, testing, or monitoring. Non-operating and operating environments include temperature, vibration, shock, acceleration, acoustic, and other environments that apply to a specific launch vehicle and launch site, such as humidity, salt fog, dust, fungus, explosive atmosphere, and electromagnetic energy. Both of the following apply:


(1) Each maximum predicted vibration, shock, and thermal environment for a flight termination system component must include a margin that accounts for the uncertainty due to flight-to-flight variability and any analytical uncertainty. For a launch vehicle configuration for which there have been fewer than three flights, the margin must be no less than plus 3 dB for vibration, plus 4.5 dB for shock, and plus and minus 11 °C for thermal range; and


(2) For a launch vehicle configuration for which there have been fewer than three flights, a launch operator must monitor flight environments at as many locations within the launch vehicle as needed to verify the maximum predicted flight environments for each flight termination system component. An exception is that the launch operator may obtain empirical shock environment data through ground testing. A launch operator must adjust each maximum predicted flight environment for any future launch to account for all data obtained through monitoring.


(c) *Thermal environment.* A component must satisfy all its performance specifications when exposed to preflight and flight thermal cycle environments. A thermal cycle must begin with the component at ambient temperature. The cycle must continue as the component is heated or cooled to achieve the required dwell time at one extreme of the required thermal range, then to achieve the required dwell time at the other extreme, and then back to ambient temperature. Each cycle, including all dwell times, must be continuous without interruption by any other period of heating or cooling. Paragraphs (c)(2) through (c)(6) of this section identify the required thermal range for each component. A thermal cycle must include no less than a one-hour dwell time at each temperature extreme. The thermal rate of change between the extremes must be no less than the maximum predicted thermal rate of change or 1 °C per minute, whichever is greater. For an ordnance device, the thermal cycle must include no less than a two-hour dwell time at each temperature extreme. The thermal rate of change between the extremes for an ordnance device must be no less than the maximum predicted thermal rate of change or 3 °C per minute, whichever is greater.


(1) *Acceptance-number of thermal cycles.* For each component, the acceptance-number of thermal cycles must be no less than eight thermal cycles or 1.5 times the maximum number of thermal cycles that the component could experience during launch processing and flight, including all launch delays and recycling, rounded up to the nearest whole number, whichever is greater.


(2) *Passive components.* A passive component must satisfy all its performance specifications when subjected to:


(i) The acceptance-number of thermal cycles from one extreme of the maximum predicted thermal range to the other extreme; and


(ii) Three times the acceptance-number of thermal cycles from the lower of −34 °C or the predicted lowest temperature minus 10 °C, to the higher of 71 °C or the predicted highest temperature plus 10 °C.


(3) *Electronic components.* An electronic flight termination system component, including any component that contains an active electronic piece-part such as a microcircuit, transistor, or diode must satisfy all its performance specifications when subjected to:


(i) The sum of ten thermal cycles and the acceptance-number of thermal cycles from one extreme of the maximum predicted thermal range to the other extreme; and


(ii) Three times the acceptance-number of thermal cycles from the lower of −34 °C or the predicted lowest temperature minus 10 °C, to the higher of 71 °C or the predicted highest temperature plus 10 °C.


(4) *Power source thermal design.* A flight termination system power source, including any battery, must satisfy all its performance specifications when exposed to preflight and flight thermal environments. The power source must satisfy the following:


(i) A silver zinc battery must satisfy all its performance specifications when subjected to the acceptance-number of thermal cycles from 10 °C lower than the lowest temperature of the battery's maximum predicted temperature range to 10 °C higher than the highest temperature of the range. An exception is that each thermal cycle may range from 5.5 °C lower than the lowest temperature of the battery's maximum predicted temperature range to 10 °C higher than the highest temperature of the range if the launch operator monitors the battery's operating temperature on the launch vehicle with an accuracy of no less than ±1.5 °C.


(ii) A nickel cadmium battery must satisfy all its performance specifications when subjected to three times the acceptance-number of thermal cycles from the lower of −20 °C or the predicted lowest temperature minus 10 °C, to the higher of 40 °C or the predicted highest temperature plus 10 °C.


(iii) Any other power source must satisfy all its performance specifications when subjected to three times the acceptance-number of thermal cycles from 10 °C lower than the lowest temperature of the maximum predicted temperature range to 10 °C higher the highest temperature of the range.


(5) *Electro-mechanical safe-and-arm devices with internal explosives.* A safe-and-arm device must satisfy all its performance specifications when subjected to:


(i) The acceptance-number of thermal cycles from one extreme of the maximum predicted thermal range to the other extreme; and


(ii) Three times the acceptance-number of thermal cycles from the lower of −34 °C or the predicted lowest temperature minus 10 °C, to the higher of 71 °C or the predicted highest temperature plus 10 °C.


(6) *Ordnance thermal design.* An ordnance device and any associated hardware must satisfy all its performance specifications when subjected to the acceptance-number of thermal cycles from the lower of −54 °C or the predicted lowest temperature minus 10 °C, to the higher of 71 °C or the predicted highest temperature plus 10 °C. Each cycle must include a two-hour dwell time at each temperature extreme and a thermal rate of change between the extremes must be no less than the maximum predicted thermal rate of change or 3 °C per minute, whichever is greater.


(d) *Random vibration.* A component must satisfy all its performance specifications when exposed to a composite vibration level profile consisting of the higher of 6 dB above the maximum predicted flight random vibration level or a 12.2Grms workmanship screening level, across the 20 Hz to 2000 Hz spectrum of the two levels. The component must satisfy all its performance specifications when exposed to three times the maximum predicted random vibration duration time or three minutes per axis, whichever is greater, on each of three mutually perpendicular axes and for all frequencies from 20 Hz to 2000 Hz.


(e) *Sinusoidal vibration.* A component must satisfy all its performance specifications when exposed to 6 dB above the maximum predicted flight sinusoidal vibration level. The component must satisfy all its performance specifications when exposed to three times the maximum predicted sinusoidal vibration duration time on each of three mutually perpendicular axes and for all frequencies from 50% lower than the predicted lowest frequency to 50% higher than the predicted highest frequency. The sweep rate must be no greater than one-third the maximum predicted sweep rate on each of the three axes.


(f) *Transportation vibration.* A component must satisfy all its performance specifications when exposed to 6 dB above the maximum predicted transportation vibration level to be experienced when the component is in the configuration in which it is transported, for three times the maximum predicted transportation exposure time. A component must also satisfy all its performance specifications when exposed to the workmanship screening vibration levels and duration required by section E417.9(f).


(g) *Pyrotechnic shock.* (1) A flight termination system component must satisfy all its performance specifications when exposed to the greater of:


(i) A force of 6 dB above the maximum predicted pyrotechnic shock level to be experienced during flight with a shock frequency response range from 100 Hz to 10,000 Hz; or


(ii) The minimum breakup qualification shock levels and frequencies required by Table E417.11-2 of appendix E of this part.


(2) A component must satisfy all its performance specifications after it experiences a total of 18 shocks consisting of three shocks in each direction, positive and negative, for each of three mutually perpendicular axes.


(h) *Transportation shock.* A flight termination system component must satisfy all its performance specifications after being exposed to the maximum predicted shock to be experienced during transportation while in the configuration in which it is packed for transport.


(i) *Bench handling shock.* A flight termination system component must satisfy all its performance specifications after being exposed to the maximum predicted shock to be experienced during handling in its unpacked configuration.


(j) *Acceleration environment.* A flight termination system component must satisfy all its performance specifications when exposed to launch vehicle breakup acceleration levels or twice the maximum predicted flight acceleration levels, whichever is greater. The component must satisfy all its performance specifications when exposed to three times the maximum predicted acceleration duration for each of three mutually perpendicular axes.


(k) *Acoustic environment.* A flight termination system component must satisfy all its performance specifications when exposed to 6 dB above the maximum predicted sound pressure level. The component must satisfy all its performance specifications when exposed to three times the maximum predicted sound pressure duration time or three minutes, whichever is greater for each of three mutually perpendicular axes. The frequency must range from 20 Hz to 2000 Hz.


(l) *Other environments.* A flight termination system component must satisfy all its performance specifications after experiencing any other environment that it could experience during transportation, storage, preflight processing, or preflight system testing. Such environments include storage temperature, humidity, salt fog, fine sand, fungus, explosive atmosphere, and electromagnetic energy environments.


(a) A flight termination system must include a command destruct system that is initiated by radio command and satisfies the requirements of this section.


(b) A command destruct system must have its radio frequency components on or above the last launch vehicle stage capable of reaching a populated or other protected area before the planned safe flight state for the launch.


(c) The initiation of a command destruct system must result in accomplishing all the flight termination system functions of section D417.3.


(d) At any point along the nominal trajectory from liftoff until no longer required by § 417.107, a command destruct system must operate with a radio frequency input signal that has an electromagnetic field intensity of 12 dB below the intensity provided by the command transmitter system under nominal conditions over 95 percent of the radiation sphere surrounding the launch vehicle.


(e) A command destruct system must survive the breakup of the launch vehicle until the system accomplishes all its flight termination functions or until breakup of the vehicle, including the use of any automatic or inadvertent separation destruct system, accomplishes the required flight termination.


(f) A command destruct system must receive and process a valid flight termination system arm command before accepting a flight termination system destruct command.


(g) For any liquid propellant, a command destruct system must allow a flight safety official to non-destructively shut down any thrusting liquid engine by command before destroying the launch vehicle.


(a) A flight termination system must include an automatic or inadvertent separation destruct system for each stage or strap-on motor capable of reaching a protected area before the planned safe flight state for each launch if the stage or strap-on motor does not possess a complete command destruct system. Any automatic or inadvertent separation destruct system must satisfy the requirements of this section.


(b) The initiation of an automatic or inadvertent separation destruct system must accomplish all flight termination system functions of section D417.3 that apply to the stage or strap-on motor on which it is installed.


(c) An inadvertent separation destruct system must activate when it senses any launch vehicle breakup or premature separation of the stage or strap-on motor on which the inadvertent separation destruct system is located.


(d) A launch operator must locate an automatic or inadvertent separation destruct system so that it will survive launch vehicle breakup until the system activates and accomplishes all its flight termination functions.


(e) For any electrically initiated automatic or inadvertent separation destruct system, each power source that supplies energy to initiate the destruct ordnance must be on the same stage or strap-on motor as the system.


(a) *General.* A flight termination system must provide for safing and arming of all flight termination system ordnance through the use of a mechanical barrier or other positive means of interrupting power to each of the ordnance firing circuits to prevent inadvertent initiation of ordnance.


(b) *Flight termination system arming.* A flight termination system must provide for each flight termination system ordnance initiation device or arming device to be armed and all electronic flight termination system components to be turned on before arming any launch vehicle or payload propulsion ignition circuits. For a launch where propulsive ignition occurs after first motion of the launch vehicle, the system must include an ignition interlock that prevents the arming of any launch vehicle or payload propulsion ignition circuit unless all flight termination system ordnance initiation devices and arming devices are armed and all electronic flight termination system components are turned on.


(c) *Preflight safing.* A flight termination system must provide for remote and redundant safing of all flight termination system ordnance before flight and during any launch abort or recycle operation.


(d) *In-flight safing.* Any safing of flight termination system ordnance during flight must satisfy all of the following:


(1) Any onboard launch vehicle hardware or software used to automatically safe flight termination system ordnance must be single fault tolerant against inadvertent safing. Any automatic safing must satisfy all of the following:


(i) Any automatic safing must occur only when the flight of the launch vehicle satisfies the safing criteria for no less than two different safing parameters or conditions, such as time of flight, propellant depletion, acceleration, or altitude. The safing criteria for each different safing parameter or condition must ensure that the flight termination system on a stage or strap-on-motor can only be safed once the stage or strap-on motor attains orbit or can no longer reach a populated or other protected area;


(ii) Any automatic safing must ensure that all flight termination system ordnance initiation devices and arming devices remain armed and all electronic flight termination system components remain powered during flight until the requirements of paragraph (d)(1)(i) of this section are satisfied and the system is safed; and


(iii) If operation of the launch vehicle could result in satisfaction of the safing criteria for one of the two safing parameters or conditions before normal thrust termination of the stage or strap-on motor to which the parameter or condition applies, the launch operator must demonstrate that the greatest remaining thrust, assuming a three-sigma maximum engine performance, cannot result in the stage or strap-on motor reaching a populated or other protected area;


(2) If a radio command safes a flight termination system, the command control system used for in-flight safing must be single fault tolerant against inadvertent transmission of a safing command under § 417.303(d).


(a) A launch operator must establish and implement written procedures to ensure that all flight termination system components are installed on a launch vehicle according to the qualified flight termination system design. The procedures must ensure that:


(1) The installation of all flight termination system mechanical interfaces is complete;


(2) Installation personnel use calibrated tools to install ordnance when a specific standoff distance is necessary to ensure that the ordnance has the desired effect on the material it is designed to cut or otherwise destroy; and


(3) Each person involved is qualified for each task that person is to perform.


(b) Flight termination system installation procedures must include:


(1) A description of each task to be performed, each facility to be used, and each hazard involved;


(2) A checklist of tools and equipment required;


(3) A list of personnel required for performing each task;


(4) Step-by-step directions written with sufficient detail for a qualified person to perform each task;


(5) Identification of any tolerances that must be met during the installation; and


(6) Steps for inspection of installed flight termination system components, including quality assurance oversight procedures.


(c) The personnel performing a flight termination system installation procedure must signify that the procedure is accomplished, and record the outcome and any data verifying successful installation.


(a) A flight termination system must interface with the launch vehicle's telemetry system to provide the data that the flight safety system crew needs to evaluate the health and status of the flight termination system prior to and during flight.


(b) The telemetry data must include:


(1) Signal strength for each command destruct receiver;


(2) Whether the power to each electronic flight termination system component is on or off; 


(3) Status of output commands for each command destruct receiver and each automatic or inadvertent separation destruct system; 


(4) Safe or arm status of each safe-and-arm device of sections D417.35 and D417.39; 


(5) Voltage for each flight termination system battery; 


(6) Current for each flight termination system battery; 


(7) Status of any electrical inhibit at the system level that is critical to the operation of a flight termination system and is not otherwise identified by this appendix; 


(8) Status of any exploding bridgewire firing unit, including arm input, power level, firing capacitor charge level, and trigger capacitor charge level; 


(9) Temperature of each flight termination system battery, whether monitored at each battery or in the immediate vicinity of each battery so that each battery's temperature can be derived; and 


(10) Status of each switch used to provide power to a flight termination system, including any switch used to change from an external power source to an internal power source.


(a) *General.* All flight termination system electrical components and electronic circuitry must satisfy the requirements of this section. 


(b) *Electronic piece-parts.* Each electronic piece-part that can affect the reliability of an electrical component or electronic circuitry during flight must satisfy § 417.309(b)(2) of this part. 


(c) *Over and under input voltage protection.* A flight termination system component must satisfy all its performance specifications and not sustain any damage when subjected to a maximum input voltage of no less than the maximum open circuit voltage of the component's power source. The component must satisfy all its performance specifications and not sustain any damage when subjected to a minimum input voltage of no greater than the minimum loaded voltage of the component's power source. 


(d) *Series-redundant circuit.* A flight termination system component that uses a series-redundant branch in a firing circuit to satisfy the prohibition against a single failure point must possess one or more monitoring circuits or test points for verifying the integrity of each series-redundant branch after assembly and during testing. 


(e) *Power control and switching.* In the event of an input power dropout, a power control or switching circuit, including any solid-state power transfer switch and arm-and-enable circuit must not change state for 50 milliseconds or more. Any electromechanical, solid-state, or relay component used in a flight termination system firing circuit must be capable of delivering the maximum firing current for no less than 10 times the duration of the intended firing pulse. 


(f) *Circuit isolation, shielding, and grounding.* The circuitry of a flight termination system component must be shielded, filtered, grounded, or otherwise isolated to preclude any energy sources, internal or external to the launch vehicle, such as electromagnetic energy, static electricity, or stray electrical currents, from causing interference that would inhibit the flight termination system from functioning or cause an undesired output of the system. An electrical firing circuit must have a single-point ground connection directly to the power source only. 


(g) *Circuit protection.* Any circuit protection provided within a flight termination system must satisfy all of the following: 


(1) Electronic circuitry must not contain protection devices, such as fuses, except as allowed by paragraph (g)(2) of this section. A destruct circuit may employ current limiting resistors; 


(2) Any electronic circuit designed to shut down or disable a launch vehicle engine and that interfaces with a launch vehicle function must use one or more devices, such as fuses, circuit breakers, or limiting resistors, to protect against over-current, including any direct short; and 


(3) The design of a flight termination system output circuit that interfaces with another launch vehicle circuit must prevent any launch vehicle circuit failure from disabling or degrading the flight termination system's performance. 


(h) *Repetitive functioning.* Each circuit, element, component, and subsystem of a flight termination system must satisfy all its performance specifications when subjected to repetitive functioning for five times the expected number of cycles required for all acceptance testing, checkout, and operations, including re-tests caused by schedule or other delays. 


(i) *Watchdog circuits.* A flight termination system or component must not use a watchdog circuit that automatically shuts down or disables circuitry during flight. 


(j) *Self-test capability.* If a flight termination system component uses a microprocessor, the component and the microprocessor must perform self-tests, detect errors, and relay the results through telemetry during flight to the launch operator. The execution of a self-test must not inhibit the intended processing function of the unit or cause any output to change. 


(k) *Electromagnetic interference protection.* The design of a flight termination system component must eliminate the possibility of the maximum predicted electromagnetic interference emissions or susceptibilities, whether conducted or radiated, from affecting the component's performance. A component's electromagnetic interference susceptibility level must ensure that the component satisfies all its performance specifications when subjected to the maximum predicted emission levels of all other launch vehicle components and external sources to which the component would be exposed. 


(l) *Ordnance initiator circuits.* An ordnance initiator circuit that is part of a flight termination system must satisfy all of the following: 


(1) An ordnance initiator circuit must deliver an operating current of no less than 150% of the initiator's all-fire qualification current level when operating at the lowest battery voltage and under the worse case system tolerances allowed by the system design limits; 


(2) For a low voltage ordnance initiator with an electro-explosive device that initiates at less than 50 volts, the initiator's circuitry must limit the power at each associated electro-explosive device that could be produced by an electromagnetic environment to a level at least 20 dB below the pin-to-pin direct current no-fire power of the electro-explosive device; and 


(3) For a high voltage ordnance initiator that initiates ordnance at greater than 1,000 volts, the initiator must include safe-and-arm plugs that interrupt power to the main initiator's charging circuits, such as the trigger and output capacitors. A high voltage initiator's circuitry must ensure that the power that could be produced at the initiator's command input by an electromagnetic environment is no greater than 20 dB below the initiator's firing level.


(a) Each parameter measurement made by a monitor circuit must show the status of the parameter. 


(b) Each monitor circuit must be independent of any firing circuit. A monitor, control, or checkout circuit must not share a connector with a firing circuit. 


(c) A monitor circuit must not route through a safe-and-arm plug. 


(d) Any monitor current in an electro-explosive device system firing line must not exceed one-tenth of the no-fire current of the electro-explosive device. 


(e) Resolution, accuracy, and data rates for each monitoring circuit must provide for detecting whether performance specifications are satisfied and detecting any out-of-family conditions.


(a) An ordnance train must consist of all components responsible for initiation, transfer, and output of an explosive charge. Ordnance train components must include, initiators, energy transfer lines, boosters, explosive manifolds, and destruct charges. 


(b) The reliability of an ordnance train to initiate ordnance, including the ability to propagate a charge across any ordnance interface, must be 0.999 at a 95% confidence level. 


(c) The decomposition, cook-off, sublimation, auto-ignition, and melting temperatures of all flight termination system ordnance must be no less than 30(C higher than the maximum predicted environmental temperature to which the material will be exposed during storage, handling, installation, transportation, and flight. 


(d) An ordnance train must include initiation devices that can be connected or removed from the destruct charge. The design of an ordnance train must provide for easy access to the initiation devices.


(a) *General.* A radio frequency receiving system must include each flight termination system antenna, radio frequency coupler, any radio frequency cable, or other passive device used to connect a flight termination system antenna to a command receiver decoder. The system must deliver command control system radio frequency energy that satisfies all its performance specifications to each flight termination system command receiver decoder when subjected to performance degradation caused by command control system transmitter variations, launch vehicle flight conditions, and flight termination system hardware performance variations. 


(b) *Sensitivity.* A radio frequency receiving system must provide command signals to each command receiver decoder at an electromagnetic field intensity of no less than 12dB above the level required for reliable receiver operation. The system must satisfy the 12-dB margin over 95% of the antenna radiation sphere surrounding the launch vehicle and must account for command control system radio frequency transmitter characteristics, airborne system characteristics including antenna gain, path loses due to plume or flame attenuation, and vehicle trajectory. For each launch, the system must satisfy the 12-dB margin at any point along the nominal trajectory until the planned safe flight state for the launch. 


(c) *Antenna.* All of the following apply to each flight termination system antenna: 


(1) A flight termination system antenna must have a radio frequency bandwidth that is no less than two times the total combined maximum tolerances of all applicable radio frequency performance factors. The performance factors must include frequency modulation deviation, command control transmitter inaccuracies, and variations in hardware performance during thermal and dynamic environments; 


(2) A launch operator must treat any thermal protection used on a flight termination system antenna as part of the antenna; and 


(3) A flight termination system antenna must be compatible with the command control system transmitting equipment. 


(d) *Radio frequency coupler.* A flight termination system must use a passive radio frequency coupler to combine radio frequency signals inputs from each flight termination system antenna and distribute the required signal level to each command receiver. A radio frequency coupler must satisfy all of the following: 


(1) A radio frequency coupler must prevent any single point failure in one redundant command receiver or antenna from affecting any other redundant command receiver or antenna by providing isolation between each port. An open or short circuit in one redundant command destruct receiver or antenna path must not prevent the functioning of the other command destruct receiver or antenna path; 


(2) Each input port must be isolated from all other input ports; 


(3) Each output port must be isolated from all other output ports; and 


(4) A radio frequency coupler must provide for a radio frequency bandwidth that exceeds two times the total combined maximum tolerances of all applicable radio frequency performance factors. The performance factors must include frequency modulation deviation of multiple tones, command control transmitter inaccuracies, and variations in hardware performance during thermal and dynamic environments.


(a) *General.* The requirements in this section apply to each electronic component that contains piece-part circuitry and is part of a flight termination system, including each command receiver decoder. Each piece-part used in an electronic component must satisfy § 417.309(b)(2) of this part. 


(b) *Response time.* Each electronic component's response time must be such that the total flight termination system response time, from receipt of a destruct command sequence to initiation of destruct output, is less than or equal to the response time used in the time delay analysis required by § 417.221. 


(c) *Wire and connectors.* All wire and connectors used in an electronic component must satisfy section D417.31. 


(d) *Adjustment.* An electronic component must not require any adjustment after successful completion of acceptance testing. 


(e) *Self-test.* The design of an electronic component that uses a microprocessor must provide for the component to perform a self-test, detect errors, and relay the results through telemetry during flight to the launch operator. The execution of a self-test must not inhibit the intended processing function of the unit or cause any output to change state. 


(f) *Electronic component repetitive functioning.* An electronic component, including all its circuitry and parts, must satisfy all its performance specifications when subjected to repetitive functioning for five times the total expected number of cycles required for acceptance tests, preflight tests, and flight operations, including potential retests due to schedule delays. 


(g) *Acquisition of test data.* The test requirements of appendix E of this part apply to all electronic components. Each electronic component must allow for separate component testing and the recording of parameters that verify its functional performance, including the status of any command output, during testing. 


(h) *Warm-up time.* The warm-up time that an electronic component needs to ensure reliable operation must be no greater than the warm-up time that is incorporated into the preflight testing of appendix E of this part. 


(i) *Electronic component circuit protection.* An electronic component must include circuit protection for power and control circuitry, including switching circuitry. The circuit protection must ensure that the component satisfies all its performance specifications when subjected to launch processing and flight environments. An electronic component's circuit protection must satisfy all of the following: 


(1) Circuit protection must provide for an electronic component to satisfy all its performance specifications when subjected to the open circuit voltage of the component's power source for no less than twice the expected duration and when subjected to the minimum input voltage of the loaded voltage of the power source for no less than twice the expected duration; 


(2) In the event of an input power dropout, any control or switching circuit critical to the reliable operation of a component, including solid-state power transfer switches, must not change state for at least 50 milliseconds; 


(3) An electronic component must not use a watchdog circuit that automatically shuts down or disables the component during flight; 


(4) An electronic component must satisfy all its performance specifications when any of its monitoring circuits or nondestruct output ports are subjected to a short circuit or the highest positive or negative voltage capable of being supplied by the monitor batteries or other power supplies where the voltage lasts for no less than five minutes; and 


(5) An electronic component must satisfy all its performance specifications when subjected to any undetectable reverse polarity voltage that can occur during launch processing for no less than five minutes. 


(j) *Electromagnetic interference susceptibility.* The design of an electronic component must eliminate the possibility of electromagnetic interference or modulated or unmodulated radio frequency emissions from affecting the component's performance. These electromagnetic interference and radio frequency environments include emissions or susceptibilities, whether conducted or radiated. 


(1) The susceptibility level of an electronic component must be below the emissions of all other launch vehicle components and external transmitters. 


(2) Any electromagnetic emissions from an electronic component must not be at a level that would affect the performance of other flight termination system components. 


(3) An electronic component must not produce any inadvertent command output and must satisfy all its performance specifications when subjected to external radio frequency sources and modulation schemes to which the component could be subjected prior to and during flight. 


(k) *Output functions and monitoring.* An electronic component must provide for all of the following output functions and monitoring: 


(1) Each series redundant branch in any firing circuit of an electronic component that prevents a single failure point from issuing a destruct output must include a monitoring circuit or test points that verify the integrity of each redundant branch after assembly; 


(2) Any piece-part used in a firing circuit must have the capacity to output at least 1.5 times the maximum firing current for no less than 10 times the duration of the maximum firing pulse; 


(3) An electronic component's destruct output circuit and all its parts must deliver the required output power to the intended output load while operating with any input voltage that is within the component's input power operational design limits; 


(4) An electronic component must include monitoring circuits that provide for monitoring the health and performance of the component including the status of any command output; and 


(5) The maximum leakage current through an electronic component's destruct output port must: 


(i) Not degrade the performance of downstream circuitry; 


(ii) Be 20 dB lower than the level that could degrade the performance of any downstream ordnance initiation system or component, such as any electro-explosive device; and 


(iii) Be 20 dB lower than the level that could result in inadvertent initiation of any downstream ordnance.


(a) *General.* Each command receiver decoder must: 


(1) Receive radio frequency energy from the command control system through the radio frequency receiving system and interpret, process, and send commands to the flight termination system; 


(2) Be compatible with the command control system transmitting equipment; 


(3) Satisfy the requirements of section D417.27 for all electronic components; 


(4) Satisfy all its performance specifications and reliably process a command signal when subjected to command control system transmitting equipment tolerances and flight generated signal degradation, including: 


(i) Locally induced radio frequency noise sources; 


(ii) Vehicle plume; 


(iii) The maximum predicted noise-floor; 


(iv) Command transmitter performance variations; and 


(v) Launch vehicle trajectory. 


(b) *Tone-based radio frequency processing.* Each tone-based command receiver decoder must satisfy all of the following for all pre-flight and flight environments: 


(1) *Decoder channel deviation.* A receiver decoder must reliably process the intended tone deviated signal at the minimum and maximum number of expected tones. The receiver decoder must satisfy all its performance specifications when subjected to: 


(i) Plus and minus 3 KHz per tone; or 


(ii) A nominal tone deviation plus twice the maximum and minus half the minimum of the total combined tolerances of all applicable radio frequency performance factors, whichever range is greater. 


(2) *Operational bandwidth.*

(i) The receiver decoder's operational bandwidth must be no less than plus and minus 45 KHz and must ensure that the receiver decoder satisfies all its performance specifications at: 


(A) Twice the worst-case command control system transmitter radio frequency shift; 


(B) Doppler shifts of the carrier center frequency; and 


(C) Shifts in flight hardware center frequency during flight at the manufacturer guaranteed receiver sensitivity. 


(ii) The operational bandwidth must account for tone deviation and the receiver sensitivity must not vary by more than 3dB across the bandwidth. 


(3) *Radio frequency dynamic range.* The receiver decoder must satisfy all its performance specifications when subjected to the variations of the radio frequency input signal level that will occur during checkout and flight. The receiver decoder must output all commands with input from the radio frequency threshold level up to: 


(i) The maximum radio frequency level that it will experience from the command control system transmitter during checkout and flight plus a 3-dB margin; or 


(ii) 13 dBm, whichever is greater. 


(4) *Capture ratio.* For each launch, the receiver decoder's design must ensure that no transmitter with less than 80% of the power of the command transmitter system for the launch, could capture or interfere with the receiver decoder. 


(5) *Radio frequency level monitor.* (i) The receiver decoder must include a monitoring circuit that accurately monitors and outputs the strength of the radio frequency input signal during flight. 


(ii) The output of the monitor circuit must be directly related and proportional to the strength of the radio frequency input signal from the threshold level to saturation. 


(iii) The dynamic range of the radio frequency input from threshold to saturation must be no less than 50 dB. The monitor circuit output amplitude from threshold to saturation must have a corresponding range of 18 dB or greater.


(iv) The monitor output signal level must be compatible with vehicle telemetry system interfaces and provide a maximum response time of 100 ms. 


(v) The slope of the monitor circuit output must not change polarity. 


(6) *Radio frequency threshold sensitivity.* The receiver decoder's threshold sensitivity must satisfy its performance specifications and be repeatable within a tolerance of plus and minus 3 dB, to demonstrate in-family performance. 


(7) *Noise level margin.* The receiver decoder's guaranteed input sensitivity must be no less than 6 dB higher than the maximum predicted noise-floor. 


(8) *Voltage standing wave ratio.* All radio frequency losses within the receiver decoder interface to the antenna system must satisfy the 12-dB margin of § 417.9(d) and be repeatable to demonstrate in-family performance. The radio frequency receiving system and the impedance of the receiver decoder must match. 


(9) *Decoder channel bandwidth.* The receiver decoder must provide for reliable recognition of the command signal when subjected to variations in ground transmitter tone frequency and frequency modulation deviation variations. The command receiver must satisfy all its performance specifications within the specified tone filter frequency bandwidth using a frequency modulation tone deviation from 2 dB to 20 dB above the measured threshold level. 


(10) *Tone balance.* Any secure receiver decoder must reliably decode a valid command with an amplitude imbalance between two tones within the same message. 


(11) *Message timing.* Any secure receiver decoder must function reliably when subjected to errors in timing caused by ground transmitter tolerances. The receiver decoder must process commands at twice the maximum and one-half the minimum timing specification of the ground system. 


(12) *Check tone.* The receiver decoder must decode a tone, such as a pilot tone or check tone, which is representative of link and command closure and provide a telemetry output indicating whether the tone is decoded. The presence or absence of this tone signal must have no effect on a command receiver decoder's command processing and output capability. 


(c) *Inadvertent command output.* A command receiver decoder must satisfy all of the following to ensure that it does not provide an output other than when it receives a valid command. 


(1) *Dynamic stability.* The receiver decoder must not produce an inadvertent output when subjected to a radio frequency input short-circuit, open-circuit, or changes in input voltage standing wave ratio. 


(2) *Out of band rejection.* The receiver decoder must not degrade in performance nor respond when subjected to any out-of-band vehicle or ground transmitter source that could be encountered from liftoff to the no-longer endanger time. The receiver decoder must not respond to frequencies, from 10 MHz to 1000 MHz except at the receiver specified operational bandwidth. The receiver decoder's radio frequency rejection of out of band signals must provide a minimum of 60 dB beyond eight times the maximum specified operational bandwidth. These frequencies must include all expected interfering transmitting sources using a minimum bandwidth of 20% of each transmitter center frequency, receiver image frequencies and harmonics of the assigned center frequency. 


(3) *Decoder channel bandwidth rejection.* The receiver decoder must distinguish between tones that are capable of inhibiting or inadvertently issuing an output command. Each tone filter must not respond to another tone outside the specified tone filter frequency bandwidth using an FM tone deviation from 2 dB to 20 dB above the measured threshold level. 


(4) *Adjacent tone decoder channel rejection.* The receiver decoder must not be inhibited or inadvertently issue an output command when subjected to any over-modulation of adjacent tones. The tone decoder channels must not respond to adjacent frequency modulation-modulated tone channels when they are modulated with a minimum of 150% of the expected tone deviation. 


(5) *Logic sequence.* Each tone sequence used for arm and destruct must protect against inadvertent or unintentional destruct actions. 


(6) *Destruct sequence.* The receiver decoder must provide a Destruct command only if preceded by a valid Arm command. 


(7) *Receiver abnormal logic.* The receiver decoder must not respond to any combination of tones or tone pairs other than the correct command sequence. 


(8) *Noise immunity.* The receiver decoder must not respond to a frequency modulated white noise radio frequency input that has a minimum frequency modulated deviation of 12 dB above the measured threshold deviation. 


(9) *Tone drop.* The receiver decoder must not respond to a valid command output when one tone in the sequence is dropped. 


(10) *Amplitude modulation rejection.* The receiver decoder must not respond to any tone or modulated input at 50% and 100% amplitude modulated noise when subjected to the maximum pre-flight and flight input power levels. 


(11) *Decoder channel deviation rejection.* The receiver decoder must not inadvertently trigger on frequency modulated noise. The receiver decoder must not respond to tone modulations 10 dB below the nominal tone modulation or lower.


(a) All wiring, including any cable and all connectors, that interface with any flight termination system component must provide for the component, wiring, and connectors to satisfy the qualification tests required by appendix E of this part. 


(b) Each connector that interfaces with a flight termination system component must protect against electrical dropout and ensure electrical continuity as needed to ensure the component satisfies all its performance specifications. 


(c) All wiring and connectors must have shielding that ensures the flight termination system satisfies all its performance specifications and will not experience an inadvertent destruct output when subjected to electromagnetic interference levels 20 dB greater than the greatest electromagnetic interference induced by launch vehicle and launch site systems. 


(d) The dielectric withstanding voltage between mutually insulated portions of any component part must provide for the component to function at the component's rated voltage and satisfy all its performance specifications when subjected to any momentary over-potentials that could normally occur, such as due to switching or surge. 


(e) The insulation resistance between mutually insulated portions of any component must provide for the component to function at its rated voltage. Any insulation material must satisfy all its performance specifications when subjected to workmanship, heat, dirt, oxidation, or loss of volatile material. 


(f) The insulation resistance between wire shields and conductors, and between each connector pin must withstand a minimum workmanship voltage of at least 1,500 volts, direct current, or 150 percent of the rated output voltage, whichever is greater. 


(g) If any wiring or connector will experience loads with continuous duty cycles of 100 seconds or greater, that wiring or connector, including each connector pin, must have a capacity of 150% of the design load. If any wiring or connector will experience loads that last less than 100 seconds, all wiring and insulation must provide a design margin greater than the wire insulation temperature specification. 


(h) All wiring, including any cable or connector, must satisfy all its performance specifications when subjected to the pull force required by section E417.9(j) and any additional handling environment that the component could experience undetected. 


(i) Redundant circuits that can affect a flight termination system's reliability during flight must not share any wiring harness or connector with each other. 


(j) For any connector or pin connection that is not functionally tested once connected as part of a flight termination system or component, the design of the connector or pin connection must eliminate the possibility of a bent pin, mismating, or misalignment. 


(k) The design of a flight termination system component must prevent undetectable damage or overstress from occurring as the result of a bent connector pin. An inadvertent initiation must not occur if a bent connector pin: 


(1) Makes unintended contact with another pin; 


(2) Makes unintended contact with the case of the connector or component; or 


(3) Produces an open circuit. 


(l) Each connector that can affect a flight termination system component's reliability during flight must satisfy the requirements of § 417.309(b)(2) of this part. 


(m) All connectors must positively lock to prevent inadvertent disconnection during launch vehicle processing and flight. 


(n) The installation of all wiring, including any cable, must protect against abrasion and crimping of the wiring.


(a) *Capacity.* A flight termination system battery must have a manufacturer-specified capacity of no less than the sum total amp-hour and pulse capacity needed for: 


(1) Any self discharge; 


(2) All load and activation checks; 


(3) All launch countdown checks; 


(4) Any potential hold time; 


(5) Any potential number of preflight re-tests due to potential schedule delays including the number of potential launch attempts that the battery could experience before it would have to be replaced; 


(6) Two arm and two destruct command loads at the end of the flight; and 


(7) A flight capacity of no less than 150% of the capacity needed to support a normal flight from liftoff to the planned safe flight state. For a launch vehicle that uses solid propellant, the flight capacity must be no less than a 30-minute hang-fire hold time. 


(b) *Electrical characteristics.* A flight termination system battery, under all load conditions, including line loss, must have all the following electrical characteristics: 


(1) The manufacturer specified minimum voltage must be no less than the minimum acceptance test voltage that satisfies the electrical component acceptance tests of appendix E of this part. For a battery used in a pulse application to fire an electro-explosive device, the manufacturer specified minimum voltage must be no less than the minimum qualification test voltage that satisfies the electro-explosive device qualification tests of appendix E of this part; 


(2) A battery that provides power to an electro-explosive device initiator, including to any initiator fired simultaneously with another initiator, must: 


(i) Deliver 150% of each electro-explosive device's all-fire current at the qualification test level. The battery must deliver the current to each ordnance initiator at the lowest system battery voltage; 


(ii) Have a current pulse that lasts ten times longer than the duration required to initiate the electro-explosive device or a minimum workmanship screening level of 200 milliseconds, whichever is greater; and 


(iii) Have a pulse capacity of no less than twice the expected number of arm and destruct command sets planned to occur during launch vehicle processing, preflight flight termination system end-to-end tests, plus flight commands including load checks, conditioning, and firing of initiators; 


(3) The design of a battery and any activation procedures must ensure uniform cell voltage after activation. Activation must include any battery conditioning needed to ensure uniform cell voltage, such as peroxide removal or nickel cadmium preparation; and 


(4) The design of a battery or the system using the battery must protect against undetectable damage to the battery from any reverse polarity, shorting, overcharging, thermal runaway, or overpressure. 


(c) *Service and storage life.* The service and storage life of a flight termination system battery must satisfy all of the following: 


(1) A flight termination system battery must have a total activated service life that provides for the battery to meet the capacity and electrical characteristics required by paragraphs (a) and (b) of this section; and 


(2) A flight termination system battery must have a specified storage life. The battery must satisfy the activated service life requirement of paragraph (c)(1) of this section after experiencing its storage life, whether stored in an activated or inactivated state. 


(d) *Monitoring capability.* A battery or the system that uses the battery must provide for monitoring the status of the battery voltage and current. The monitoring must be sufficient to detect the smallest change in voltage or current that would indicate any health problem with each battery. Monitoring accuracy must be consistent with the minimum and maximum voltage and current limits used for launch countdown. The design of a battery that requires heating or cooling to sustain performance must provide for monitoring the battery's temperature with a resolution of 0.5 °C. 


(e) *Battery identification.* Each battery must have an attached permanent label with the component name, type of construction (including chemistry), manufacturer identification, part number, lot and serial number, date of manufacture, and storage life. 


(f) *Battery temperature control.* Any battery heater must ensure even temperature regulation of all battery cells. 


(g) *Silver zinc batteries.* Any silver zinc battery that is part of a flight termination system must satisfy all of the following: 


(1) A silver zinc battery must consist of cells assembled from electrode plates that are manufactured together and without interruption; 


(2) The design of a silver zinc battery must allow activation of each individual cell within the battery; 


(3) For any silver zinc battery that may vent electrolyte mist as part of normal operations, the battery must satisfy all its performance specifications for pin-to-case and pin-to-pin resistances after the battery experiences the maximum normal venting; 


(4) The design of a silver zinc battery and its cells must allow for the qualification, acceptance, and storage life extension testing required by appendix E of this part. A launch operator must ensure sufficient batteries and cells are available from the same lot to accomplish the required testing; 


(5) Each silver zinc battery must have attached, no less than one additional cell from the same production lot, with the same lot date code, as the cells in the battery for use in cell acceptance verification tests. The cell must remain attached to the battery from the time of assembly until performance of the acceptance tests to ensure that the additional cell is subjected to all the same environments as the complete battery; 


(6) The design of a silver zinc battery must permit voltage monitoring of each cell during open circuit voltage and load tests of the battery; and 


(7) All cell and battery parts and materials and manufacturing parts, materials, and processes must undergo configuration control that ensures that each cell and battery has repeatable in-family performance unless each cell and battery undergoes lot testing that demonstrates repeatable in-family performance. The launch operator must identify and implement any lot testing that replaces configuration control. 


(h) *Rechargeable cells and batteries.* (1) Any rechargeable battery or cell that is part of a flight termination system must satisfy all the requirements of this section for each charge-discharge cycle. 


(2) With the exception of any silver zinc battery, a rechargeable battery must satisfy all its performance specifications for five times the number of operating charge and discharge cycles expected of the battery throughout its life, including all acceptance testing, preflight testing, and flight. A silver zinc rechargeable battery must satisfy all its performance specifications for each operating charge-discharge cycle expected of the battery throughout its life, including all acceptance testing, preflight testing, and flight. 


(3) A rechargeable battery must consist of cells from the same production lot. For a battery that consists of commercially produced nickel cadmium cells, each cell must be from the same production lot of no less than three thousand cells that are manufactured without interruption. 


(4) The design of a silver zinc or commercial nickel cadmium battery and each of its cells must allow for the qualification and acceptance tests required by appendix E of this part. A launch operator must ensure sufficient batteries and cells are available to accomplish the required testing. A launch operator must identify and implement design and test requirements for any other type of rechargeable battery proposed for use as part of a flight safety system. 


(i) *Commercial nickel cadmium cells and batteries.* Any nickel cadmium battery that uses one or more commercially produced nickel cadmium cells and is part of a flight termination system must satisfy each of the following to demonstrate that each cell or battery satisfies all its performance specifications: 


(1) The battery or cell must have repeatable capacity and voltage performance. Capacity must be repeatable within one percent for each charge and discharge cycle. 


(2) Any battery or cell venting device must ensure that the battery or cell does not experience a loss of structural integrity or create a hazardous condition when subjected to electrical discharge, charging and short-circuit conditions. 


(3) The battery or cell must retain its charge and provide its required capacity, including the required capacity margin, from the final charge used prior to launch to the planned safe flight state during flight at the maximum pre-launch and flight temperature. The cell or battery must not self-discharge more than 10% of its fully charged capacity after 72 hours at ambient temperature. 


(4) The design of the battery must prevent current leakage from pin-to-pin or pin-to-case from creating undesired events or battery self-discharge. Pin-to-pin and pin-to-case resistances must be repeatable so that measurements of pin-to-pin and pin-to-case resistances can establish in-family performance and determine whether all battery wiring and connectors are installed according to the manufacturer's design specifications. 


(5) The battery or battery case must be sealed to the required leak rate and not loose structural integrity or create a hazardous condition when subjected to the predicted operating conditions plus all required margins including any battery short-circuit. The battery or battery case must maintain its structural integrity when subjected to no less than 1.5 times the greatest operating pressure differential that could occur under qualification testing, preflight, or flight conditions. 


(6) Any battery voltage, current, or temperature monitoring circuit that is part of the battery must have resolution, accuracy, and data rates that all for detecting whether the performance specifications are satisfied and detecting any out-of-family conditions. 


(7) Any battery heater circuit, including any thermostat must ensure that all cells are heated uniformly and must allow for repeatable battery performance that satisfies all the battery's performance specifications. Any heating must ensure that cells are not overstressed due to excessive temperature. The thermostat tolerances must ensure that the battery remains within its thermal design limits. 


(8) The battery or cell must satisfy all its electrical performance specifications and be in-family while subjected to all pre-flight and flight environments, including hot and cold temperature, and all required electrical loads at the beginning, middle, and end of its manufacturer specified capacity.


(a) This section applies to any electro-mechanical safe-and-arm device that has an internal electro-explosive device and is part of a flight termination system. A safe-and-arm device must provide for safing and arming of the flight termination system ordnance to satisfy section D417.13. 


(b) A safe-and-arm device in the arm position must remain in the arm position and satisfy all its performance specifications when subjected to the design environmental levels determined under section D417.7. 


(c) All wiring and connectors used in a safe-and-arm device must satisfy section D417.31. 


(d) Each piece-part that is used in the firing circuit of a safe-and-arm device and that can affect the reliability of the device during flight must satisfy § 417.309(b)(2) of this part. 


(e) A safe-and-arm device's internal electro-explosive device must satisfy the requirements for an ordnance initiator of section D417.41. 


(f) A safe-and-arm device must not require any adjustment throughout its service life. 


(g) A safe-and-arm device's internal electrical firing circuitry, such as wiring, connectors, and switch deck contacts, must satisfy all its performance specifications when subjected to an electrical current pulse with an energy level of no less than 150% of the internal electro-explosive device's all-fire energy level for 10 times as long as the all-fire pulse lasts. A safe-and-arm device must deliver this firing pulse to the internal electro-explosive device without any dropout that could affect the electro-explosive device's performance when subjected to the design environmental levels. 


(h) A safe-and-arm device must satisfy all its performance specifications after being exposed to the handling drop required by section E417.9(k) and any additional transportation, handling, or installation environment that the device could experience undetected. 


(i) A safe-and-arm device must not initiate and must allow for safe disposal after experiencing the abnormal drop required by section E417.9(l). 


(j) When a safe-and-arm device's electro-explosive device is initiated, the safe- and arm-device's body must not fragment, regardless of whether the explosive transfer system is connected or not. 


(k) When dual electro-explosive devices are used within a single safe-and-arm device, the design must ensure that one electro-explosive device does not affect the performance of the other electro-explosive device. 


(l) A safe-and-arm device must satisfy all its performance specifications when subjected to no less than five times the total number of safe and arm cycles required for the combination of all acceptance tests, preflight tests, and flight operations, including an allowance for potential re-tests due to schedule changes. 


(m) The design of a safe-and-arm device must allow for separate component testing and recording of parameters that verify its functional performance , and the status of any command output during the tests required by section E417.25. 


(n) A safe-and-arm device must be environmentally sealed to the equivalent of 10_−4_ scc/sec of helium at one atmosphere differential or the device must provide other means of withstanding non-operating environments, such as salt-fog and humidity, experienced during storage, transportation and preflight testing. 


(o) The safing of a safe-and-arm device must satisfy all of the following: 


(1) While in the safe position, a safe-and-arm device must protect each internal electro-explosive device from any condition that could degrade the electro-explosive device's performance and prevent inadvertent initiation during transportation, storage, preflight testing, and any preflight fault conditions. 


(2) While in the safe position, a safe-and-arm device's electrical input firing circuit must prevent degradation in performance or inadvertent initiation of the electro-explosive device when the safe-and-arm device is subjected to any external energy source, such as static discharge, radio frequency energy, or firing voltage. 


(3) While in the safe position, a safe-and-arm device must prevent the initiation of its internal electro-explosive device and any other ordnance train component, with a reliability of 0.999 at a 95% confidence level. 


(4) A safe-and-arm device must satisfy all its performance specifications when in the safe position and subjected to the continuous operational arming voltage required by section E417.25(d). 


(5) A safe-and-arm device must not initiate its electro-explosive device or any other ordnance train component when locked in the safe position and subjected to the continuous operational arming voltage required by section E417.25(e)(3). 


(6) A safe-and-arm device must have a visual display of its status on the device and remote display of the status when the device is in the safe position. When transitioning from the arm to safe position, the safe indication must not appear unless the position of the safe-and-arm device has progressed more than 50% beyond the no-fire transition motion. 


(7) A safe-and-arm device must have a remote means of moving its rotor or barrier to the safe position from any rotor or barrier position. 


(8) A safe-and-arm device must have a manual means of moving its rotor or barrier to the safe position. 


(9) A safe-and-arm device must have a safing interlock that prevents movement from the safe position to the arm position while operational arming current is being applied. The interlock must have a means of positively locking into place and must allow for verification of proper functioning. The interlock removal design or procedure must eliminate the possibility of accidental disconnection of the interlock. 


(p) The arming of a safe-and-arm device must satisfy all of the following: 


(1) When a safe-and-arm device is in the arm position, all ordnance interfaces, such as electro-explosive device, rotor charge, and explosive transfer system components must align with one another to ensure propagation of the explosive charge with a reliability of 0.999 at a 95% confidence level; 


(2) When in the arm position, the greatest energy supplied to a safe-and-arm device's electro-explosive device from electronic circuit leakage and radio frequency energy must be no greater than 20 dB below the guaranteed no-fire level of the electro-explosive device; 


(3) A safe-and-arm device must have a visual display of its status on the device and provide for remote display of the status when the device is in the arm position. The arm indication must not appear unless the safe-and-arm device is armed as required by paragraph (o)(1) of this section; and 


(4) A safe-and-arm device must provide for remote arming of the device.


(a) *General.* This section applies to any exploding bridgewire firing unit that is part of a flight termination system. An exploding bridgewire firing unit must provide for safing and arming of the flight termination system ordnance to satisfy section D417.13. An exploding bridgewire firing unit must satisfy the requirements for electronic components of section D417.29. 


(b) *Charging and discharging.* An exploding bridgewire firing unit must have a remote means of charging and discharging of the unit's firing capacitor and an external means of positively interrupting the firing capacitor charging voltage. 


(c) *Input command processing.* An exploding bridgewire firing unit's electrical input processing circuitry must satisfy all of the following: 


(1) An exploding bridgewire firing unit's input circuitry must function, when subjected to the greatest potential electromagnetic interference noise environments, without inadvertently triggering; 


(2) In the firing circuit of an exploding bridgewire firing unit, all series redundant branches that prevent any single failure point from issuing a destruct output must include monitoring circuits or test points for verifying the integrity of each redundant branch after assembly; 


(3) The unit input trigger circuitry of an exploding bridgewire firing unit must maintain a minimum 20 dB margin between the threshold trigger level and the worst-case noise environment; 


(4) An exploding bridgewire firing unit must have a minimum trigger sensitivity that provides for the unit to fire at 6 dB lower in amplitude and one-half the duration of the worst-case trigger signal that the unit could receive during flight; 


(5) In the event of a power dropout, any control or switching circuit critical to the reliable operation of an exploding bridgewire firing unit, including solid-state power transfer switches, must not change state for 50 milliseconds or more; and 


(6) An exploding bridgewire firing unit's response time must satisfy all its performance specifications for the range of input trigger signals from the specified minimum trigger signal amplitude and duration to the specified maximum trigger signal amplitude and duration. 


(d) *High voltage output.* An exploding bridgewire firing unit's high voltage discharge circuit must satisfy all of the following: 


(1) An exploding bridgewire firing unit must include circuits for capacitor charging, bleeding, charge interruption, and triggering; 


(2) An exploding bridgewire firing unit must have a single fault tolerant capacitor discharge capability; 


(3) An exploding bridgewire firing unit must deliver a voltage to the exploding bridgewire that is no less than 50% greater than the exploding bridgewire's minimum all-fire voltage, not including transmission losses, at the unit's worst-case high and low arming voltages; 


(4) The design of an exploding bridgewire firing unit must prevent corona and arcing on internal and external high voltage circuitry; 


(5) An exploding bridgewire firing unit must satisfy all its performance specifications at the worst-case high and low arm voltages that could be delivered during flight; and 


(6) Any high energy trigger circuit used to initiate exploding bridgewire firing unit's main firing capacitor must deliver an output signal of no less than a 50% voltage margin above the nominal voltage threshold level. 


(e) *Output monitors.* The monitoring circuits of an exploding bridgewire firing unit must provide the data for real-time checkout and determination of the firing unit's acceptability for flight. The monitored data must include the voltage level of all high voltage capacitors and the arming power to the firing unit.


(a) This section applies to any ordnance interrupter safe-and-arm device that does not have an internal electro-explosive device and is part of a flight termination system. An ordnance interrupter must provide for safing and arming of the flight termination system ordnance to satisfy section D417.13. 


(b) An ordnance interrupter must remain in the armed position and satisfy all its performance specifications when subjected to the design environmental levels determined according to section D417.7. 


(c) An ordnance interrupter must not require adjustment throughout its service life. 


(d) An ordnance interrupter must satisfy all its performance specifications after experiencing any transportation, handling, or installation environment that the device could experience undetected. 


(e) An ordnance interrupter that uses ordnance rotor leads must not initiate and must allow for safe disposal after experiencing the worst-case drop and resulting impact that it could experience during storage, transportation, or installation. 


(f) An ordnance interrupter must satisfy all of its performance specifications when subjected to repetitive functioning for five times the expected number of arming cycles required for acceptance testing, preflight checkout, and flight operations, including an allowance for re-tests due to potential schedule delays. 


(g) An ordnance interrupter must not fragment during ordnance initiation. 


(h) The design of a flight termination system must protect an ordnance interrupter from conditions that could degrade its performance or cause inadvertent initiation during transportation, storage, installation, preflight testing, and potential preflight fault conditions. Safing of an ordnance interrupter must satisfy all of the following: 


(1) While in the safe position, an ordnance interrupter must prevent the functioning of an ordnance train with a reliability of 0.999 at a 95% confidence level; 


(2) When locked in the safe position, an ordnance interrupter must prevent initiation of an ordnance train. The ordnance interrupter must satisfy all its performance specification when locked in the safe position and subjected to the continuous operational arming voltage required by section E417.29(j); 


(3) An ordnance interrupter must not initiate its electro-explosive device or any other ordnance train component when locked in the safe position and subjected to the continuous operational arming voltage required by section E417.29(e)(3); 


(4) An ordnance interrupter must have a manual and a remote means of safing from any rotor or barrier position; 


(5) An ordnance interrupter must have a visual display of the status on the device and provide for remote display of the status when the ordnance interrupter is in the safe position; and


(6) An ordnance interrupter must include a safing interlock that prevents the interrupter from moving from the safe position to the arm position when subjected to an operational arming current. A safing interlock must have a means of positively locking into place and a means of verifying proper function of the interlock. A safing interlock and any related operation procedure must eliminate the possibility of inadvertent disconnection of the interlock.


(i) Arming of an ordnance interrupter must satisfy all of the following:


(1) An ordnance interrupter is armed when all ordnance interfaces, such as a donor explosive transfer system, rotor charge, and acceptor explosive transfer system are aligned with one another to propagate the explosive charge with a reliability of 0.999 at a 95% confidence level;


(2) An ordnance interrupter must have a visual display of the status on the device and provide for remote display of the status when the ordnance interrupter is in the arm position; and


(3) An ordnance interrupter must provide for remote arming of the interrupter.


(a) This section applies to any low-voltage electro-explosive device that is part of a flight termination system or high-voltage exploding bridgewire ordnance initiator that is part of a flight termination system. An ordnance initiator must use electrical energy to trigger an explosive charge that initiates the flight termination system ordnance.


(b) An ordnance initiator must have a manufacturer-specified all-fire energy level. When the all-fire energy level is applied, the ordnance initiator must fire with a reliability of no less than 0.999 at a 95 percent confidence level.


(c) An ordnance initiator must have a specified no-fire energy level. An ordnance initiator must not fire when exposed to continuous application of the no-fire energy level, with a reliability of no less than 0.999 at a 95 percent confidence level. An ordnance initiator must satisfy all its performance specifications when subjected to continuous application of the no-fire energy level.


(d) The lowest temperature at which an ordnance initiator would experience autoignition, sublimation, or melting or in any other way experience degradation in performance must be no less than 30 °C higher than the highest temperature that the initiator could experience prior to or during flight.


(e) An ordnance initiator must not fire, and must satisfy all its performance specifications when subjected to the maximum expected electrostatic discharge that it could experience from personnel or conductive surfaces. An ordnance initiator must not fire, and must satisfy all its performance specifications when subjected to workmanship discharges of no less than a 25-kV, 500-pF pin-to-pin discharge through a 5-kΩ resistor and a 25-kV, 500-pF pin-to-case discharge with no resistor.


(f) An ordnance initiator must not initiate and must satisfy all its performance specifications when exposed to stray electrical current that is at a 20-dB margin greater than the greatest stray electrical current that the ordnance initiator could experience prior to or during flight. When determining the 20-dB margin, a launch operator must account for all potential sources of stray electrical current, including leakage current from other electronic components and radio frequency induced electrical current.


(g) An ordnance initiator must satisfy all its performance specification after being exposed to the tensile load required by section E417.9(j), the handling drop required by section E417.9(k), and any additional transportation, handling, or installation environment that the device could experience undetected.


(h) An ordnance initiator must not initiate and must allow for safe disposal after experiencing the abnormal drop required by section E417.9(l).


(i) An ordnance initiator must be hermetically sealed to the equivalent of 5 × 10_−6_ scc/sec of helium at one atmosphere pressure differential.


(j) The insulation resistance between mutually insulated points must ensure that an ordnance initiator satisfies all its performance specifications when subjected to the greater of twice the maximum applied voltage during testing and flight or a workmanship voltage of no less than 500 volts. The insulation material must satisfy all its performance specifications when exposed to workmanship, heat, dirt, oxidation, and any additional expected environment.


(a) This section applies to any exploding bridgewire that is part of a flight termination system. An exploding bridgewire must use high-voltage electrical energy of 50 volts or greater to trigger an explosive charge that initiates the flight termination system ordnance.


(b) An exploding bridgewire must satisfy the ordnance initiator requirements of section D417.41.


(c) An exploding bridgewire's electrical circuitry, such as connectors, pins, wiring and header assembly, must transmit an all-fire pulse at a level 50% greater than the lowest exploding bridgewire firing unit's operational firing voltage. This must include allowances for effects such as corona and arcing of a flight configured exploding bridgewire exposed to altitude, thermal vacuum, salt-fog, and humidity environments.


(d) An exploding bridgewire must not fragment during ordnance initiation.


(e) All exploding bridgewire connector pins must withstand the tension and compression loads required by section E417.9(j).


(a) This section applies to any percussion-activated device that is part of a flight termination system. A percussion-activated device must use mechanical energy to trigger an explosive charge that initiates the flight termination system ordnance.


(b) A percussion-activated device's lanyard pull system must have a protective cover or other feature that prevents inadvertent pulling of the lanyard.


(c) A percussion-activated device must not fragment upon initiation.


(d) A percussion-activated device must have a guaranteed no-fire pull force of no less than twice the largest inadvertent pull force that the device could experience:


(1) Any time prior to flight that the safing interlock of paragraph (o) of this section is not in place; or


(2) During flight.


(e) A percussion-activated device must not initiate when pulled with its maximum no-fire pull force and then released with a reliability of no less than 0.999 at a 95% confidence level.


(f) A percussion-activated device must have a primer all-fire energy level, including spring constant and pull distance that ensures initiation, with a reliability of no less than 0.999 at a 95% confidence level when subjected to preflight and flight environments.


(g) A percussion-activated device must deliver an operational impact force to the primer of no less than twice the all-fire energy level. 


(h) A percussion-activated device's primer must initiate and must satisfy all its performance specifications when subjected to two times the operational impact energy or four times the all-fire impact energy level. 


(i) A percussion-activated device's reliability must satisfy its performance specifications when subjected to a no-fire pull force and then released. 


(j) The lowest temperature at which a percussion-activated device would experience autoignition, sublimation, or melting, or in any other way not satisfy its performance specifications, must be no less than 30 °C higher than the highest temperature that the percussion-activated device could experience prior to or during flight. 


(k) A percussion-activated device must satisfy all its performance specifications after experiencing the handling drop required by section E417.9(k) and any additional transportation, handling, or installation environment that the device could experience undetected. 


(l) A percussion-activated device's ordnance must be hermetically sealed to the equivalent of 5 × 10_−6_ scc/sec of helium at one atmosphere differential. 


(m) A percussion-activated device's structural and firing components must withstand 500 percent of the largest pull or jerk force that the device could experience during breakup of the launch vehicle. 


(n) A percussion-activated device must not initiate and must allow for safe disposal after experiencing the abnormal drop required by section E417.9(l). 


(o) A percussion-activated device must include a safing interlock, such as a safing pin, that provides a physical means of preventing the percussion-activated device assembly from pulling more than 50% of the guaranteed no-fire pull distance. The following apply to a safing interlock: 


(1) A safing interlock must positively lock into place and must have a means of verifying proper function of the interlock. 


(2) A safing interlock must eliminate the possibility of inadvertent disconnection or removal of the interlock should a pre-load condition exist on the lanyard unless the device provides a visual or other means of verifying that there is no load on the lanyard. 


(3) A safing interlock, when in place, must prevent initiation of the percussion actuated device when subjected to twice the greatest possible inadvertent pull force that could be experienced during launch processing.


(a) This section applies to any explosive transfer system that is part of a flight termination system. An explosive transfer system must transmit an explosive charge from an initiation source, such as an ordnance initiator, to other flight termination system ordnance such as a destruct charge. 


(b) Ordnance used in an explosive transfer system must consist of a secondary explosive. An exception to this is any transition component that contains a primary explosive that is fully contained within the transition component. Any transition component that contains a primary explosive must be no more sensitive to inadvertent detonation than a secondary explosive. 


(c) An explosive transfer system, including all donor, acceptor, and transition charges and components must transfer an explosive charge with a reliability of no less than 0.999 at a 95% confidence level. 


(d) An explosive transfer system must satisfy all its performance specifications with the smallest bend radius that it is subjected to when installed in its flight configuration. 


(e) All explosive transfer connectors must positively lock in place and provide for verification of proper connection through visual inspection. 


(f) Each explosive transfer system component must satisfy all its performance specifications when subjected to the tensile load required by section E417.9(j). 


(g) An explosive transfer system must satisfy all its performance specifications after experiencing the handling drop required by section E417.9(k) and any additional transportation, handling, or installation environment that the system could experience undetected. 


(h) An explosive transfer system must not initiate and must allow for safe disposal after experiencing the abnormal drop required by section E417.9(l). 


(i) An explosive transfer system must be hermetically sealed to the equivalent of 5 × 10_−6_ scc/sec of helium at one atmosphere pressure differential.


(a) This section applies to any destruct charge that is part of a flight termination system. A destruct charge must sever or penetrate a launch vehicle component or payload, such as a propellant tank or motor casing, to accomplish a flight termination function. 


(b) A destruct charge must use a secondary explosive. 


(c) When initiated, a destruct charge acceptor, where applicable, or main charge must ensure the transfer of the explosive charge with a reliability of 0.999 at a 95% confidence level. 


(d) Initiation of a destruct charge must result in a flight termination system action in accordance with the flight termination system functional requirements of § 417.303. 


(e) A destruct charge must sever or penetrate 150% of the thickness of the material that must be severed or penetrated in order for the destruct charge to accomplish its intended flight termination function. A destruct charge, when initiated to terminate the flight of a launch vehicle, must not detonate any launch vehicle or payload propellant. 


(f) Each destruct charge and associated fitting must satisfy all its performance specifications when subjected to the tensile load required by section E417.9(j). 


(g) A destruct charge must satisfy all its performance specifications after experiencing the handling drop required by section E417.9(k) and any additional transportation, handling, or installation environment that the charge could experience undetected. 


(h) A destruct charge must not initiate and must allow for safe disposal after experiencing the abnormal drop required by section E417.9(l). 


(i) A destruct charge must be hermetically sealed to the equivalent of 5 × 10_−6_ scc/sec of helium at one atmosphere pressure differential.


(a) This section applies to any vibration or shock isolator that is part of a flight safety system. A vibration or shock isolator must ensure the environmental survivability of a flight termination system component by reducing the vibration or shock levels that the component experiences during flight. 


(b) A vibration or shock isolator must have repeatable natural frequency and resonant amplification parameters when subjected to flight environments. 


(c) An isolator must account for all effects that could cause variations in repeatability, including acceleration preloads, temperature, component mass, and vibration level variations. 


(d) A vibration or shock isolator must satisfy all of its performance specifications when subjected to the qualification test environments for each component that is mounted on the isolator. 


(e) All components mounted on a vibration or shock isolator must withstand the environments introduced by isolator amplification. In addition, all component interface hardware, such as connectors, cables, and grounding straps, must withstand any added deflection introduced by an isolator.


(a) This section applies to any miscellaneous flight termination system component that is not specifically identified by this appendix. 


(b) A miscellaneous component must satisfy all its performance specifications when subjected to the non-operating and operating environments of section D417.3. 


(c) The design of a miscellaneous component must provide for the component to be tested in accordance with appendix E of this part. 


(d) A launch operator must identify any additional requirements that apply to any new or unique component and demonstrate that those requirements ensure the reliability of the component.




