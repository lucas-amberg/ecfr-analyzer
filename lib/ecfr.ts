import { Agency, CfrCorrection, CfrReferenceDetail } from "./services/ecfr";

export function findAgenciesForCorrection(
    correction: CfrCorrection,
    agencies: Agency[],
): string[] {
    const matchedAgencies = new Set<string>();

    const checkAgency = (agency: Agency, title: number, chapter: string) => {
        const hasMatch = agency.cfr_references.some(
            (agencyRef) =>
                String(agencyRef.title) === String(title) &&
                agencyRef.chapter === chapter,
        );
        if (hasMatch) {
            matchedAgencies.add(agency.display_name);
        }

        agency.children?.forEach((childAgency) => {
            checkAgency(childAgency, title, chapter);
        });
    };

    for (const ref of correction.cfr_references) {
        const title = parseInt(ref.hierarchy.title);
        const chapter = ref.hierarchy.chapter;

        if (!isNaN(title)) {
            agencies.forEach((agency) => {
                checkAgency(agency, title, chapter);
            });
        }
    }

    if (matchedAgencies.size === 0) {
        const checkAgencyTitle = (agency: Agency, title: number) => {
            const hasMatch = agency.cfr_references.some(
                (agencyRef) => String(agencyRef.title) === String(title),
            );
            if (hasMatch) {
                matchedAgencies.add(agency.display_name);
            }
            agency.children?.forEach((childAgency) => {
                checkAgencyTitle(childAgency, title);
            });
        };

        agencies.forEach((agency) => {
            checkAgencyTitle(agency, correction.title);
        });
    }

    return matchedAgencies.size > 0
        ? Array.from(matchedAgencies)
        : [
              `Unknown Agency (Title ${correction.title}, Chapter ${correction.cfr_references[0]?.hierarchy.chapter || "Unknown"})`,
          ];
}

export function calculateCorrectionDays(correction: CfrCorrection): number {
    const errorDate = new Date(correction.error_occurred);
    const correctedDate = new Date(correction.error_corrected);
    const diffTime = Math.abs(correctedDate.getTime() - errorDate.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export function buildEcfrUrl(ref: CfrReferenceDetail): string {
    const base = "https://www.ecfr.gov/current";

    if (ref.cfr_reference) {
        const match = ref.cfr_reference.match(/(\d+)\s+CFR\s+(\d+)\.(\d+)/);
        if (match) {
            const [, title, section, subsection] = match;
            return `${base}/title-${title}/section-${section}.${subsection}`;
        }
    }

    const parts = [];

    if (ref.hierarchy.title) {
        parts.push(`title-${ref.hierarchy.title}`);
    }

    if (ref.hierarchy.chapter) {
        parts.push(`chapter-${ref.hierarchy.chapter}`);
    }

    if (ref.hierarchy.part) {
        parts.push(`part-${ref.hierarchy.part}`);
    }

    if (ref.hierarchy.subpart) {
        parts.push(`subpart-${ref.hierarchy.subpart}`);
    }

    if (ref.hierarchy.appendix) {
        parts.push(`appendix-${ref.hierarchy.appendix}`);
    }

    return `${base}/${parts.join("/")}`;
}
