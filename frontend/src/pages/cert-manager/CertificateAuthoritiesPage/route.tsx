import { createFileRoute } from "@tanstack/react-router";

import { CertificateAuthoritiesPage } from "./CertificateAuthoritiesPage";

export const Route = createFileRoute(
  "/_authenticate/_inject-org-details/_org-layout/projects/cert-management/$projectId/_cert-manager-layout/certificate-authorities"
)({
  component: CertificateAuthoritiesPage,
  beforeLoad: ({ context }) => {
    return {
      breadcrumbs: [
        ...context.breadcrumbs,
        {
          label: "Certificate Authorities"
        }
      ]
    };
  }
});
