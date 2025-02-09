# Appendix C to Part 300—National Instructional Materials Accessibility Standard (NIMAS) 


Under sections 612(a)(23)(A) and 674(e)(4) of the Individuals with Disabilities Education Act, as amended by the Individuals with Disabilities Education Improvement Act of 2004, the Secretary of Education establishes the NIMAS. Under section 674(e)(4) of the Act, the NIMAS applies to print instructional materials published after July 19, 2006. The purpose of the NIMAS is to help increase the availability and timely delivery of print instructional materials in accessible formats to blind or other persons with print disabilities in elementary and secondary schools.


The Baseline Element Set details the minimum requirement that must be delivered to fulfill the NIMAS. It is the responsibility of publishers to provide this NIMAS-conformant XML content file, a package file (OPF), a PDF-format copy of the title page (or whichever page(s) contain(s) ISBN and copyright information), and a full set of the content's images. All of the images included within a work must be provided in a folder and placeholders entered in the relevant XML document indicating their location (all images must be included). The preferred image type is SVG, next is either PNG or JPG format. Images should be rendered in the same size/proportion as their originals at 300 dpi. Images should be named with relative path filenames in XML files (example: img id=“staricon4” src=“./images/U10C02/staricon4.jpg” alt=“star icon”).


NIMAS-conformant content must be valid to the NIMAS 1.1 [see ANSI/NISO Z39.86 2005 or subsequent revisions]. In addition, files are required to use the tags from the Baseline Element Set when such tags are appropriate. Publishers are encouraged to augment the required Baseline Element Set with tags from the Optional Element Set (elements not included in the Standard) as applicable. For the purposes of NIMAS, appropriate usage of elements, both baseline and optional, is defined by the DAISY Structure Guidelines. Files that do not follow these guidelines in the selection and application of tags are not conformant to this Standard. Both optional elements and appropriate structure guidelines may be located within Z39.86-2002 and Z39.86-2005 available from *http://www.daisy.org/z3986/.* Use of the most current standard is recommended.


Publishers are encouraged to apply markup beyond the baseline (required) elements. The complete DTBook Element Set reflects the tags necessary to create the six types of Digital Talking Books and Braille output. Because of the present necessity to subdivide the creation of alternate format materials into distinct phases, the Panel determined that baseline elements would be provided by publishers, and optional elements would be added to the NIMAS-conformant files by third party conversion entities. In both circumstances the protocols for tagging digital files should conform to the most current ANSI/NISO Z39.86 specification. Content converters are directed to the most current DAISY Structure Guidelines (*http://www.daisy.org/z3986/*) for guidance on their use.


Since the publication of the original National File Format report from which the NIMAS technical specifications were derived, ANSI/NISO Z39.86-2002 was updated and is now ANSI/NISO Z39.86-2005. It may be best to avoid using the following optional elements which are no longer included in ANSI/NISO Z39.86-2005: style, notice, hr, and levelhd.


Also, the following new elements were introduced by ANSI/NISO Z39.86-2005 and should be considered optional elements for the NIMAS: bridgehead, byline, covertitle, dateline, epigraph, linegroup, and poem. Please refer to ANSI/NISO Z39.86-2005 for additional information regarding these elements. To access the ANSI/NISO Z39.86-2005 specification, go to *http://www.daisy.org/z3986/.*

A package file describes a publication. It identifies all other files in the publication and provides descriptive and access information about them. A publication must include a package file conforming to the NIMAS. The package file is based on the Open eBook Publication Structure 1.2 package file specification (For most recent detail please see *http://www.openebook.org/oebps/oebps1.2/download/oeb12-xhtml.htm#sec2*). A NIMAS package file must be an XML-valid OeB PS 1.2 package file instance and must meet the following additional standards:


The NIMAS Package File must include the following Dublin Core (dc:)metadata:


And the following x-metadata items:


The following metadata were proposed also as a means of facilitating recordkeeping, storage and file retrieval:


An additional suggestion references the use of:


A final determination as to which of these specific metadata elements to use needs to be clarified in practice. The package manifest must list all provided files (text, images, etc.).


The most current DAISY/NISO standard, formally the *ANSI/NISO Z39.86, Specifications for the Digital Talking Book* defines a comprehensive system for creating Digital Talking Books. A part of this standard is DTBook, an XML vocabulary that provides a core set of elements needed to produce most types of books. However, DTBook is not intended to be an exhaustive vocabulary for all types of books.


Guidelines for the correct approach to extend the DAISY/NISO standard have been established. Mathematics, video support, testing, workbooks, music, dictionaries, chemistry, and searching are some of the extensions that have been discussed. Visit *http://www.daisy.org/z3986/* to learn more about modular extensions.


