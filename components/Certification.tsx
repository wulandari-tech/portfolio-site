import { CertificationProps } from "@/types";
import { format } from "date-fns";

export default function Certification({ certification }: CertificationProps) {
    const { name, issuer, issueDate, credentialUrl, credentialId } = certification;
    return (
        <>
            <h2>{name}</h2>
            <p>Issued by {issuer}</p>
            <p>Issued on {format(issueDate, 'yyyy-MM-dd')}</p>
            <p>Credential ID: {credentialId}</p>
            <p>Click <a aria-label='Link to certification (opens in new tab)' href={credentialUrl} target='_blank'>here</a> to see the certification...</p>
        </>
    );
}
