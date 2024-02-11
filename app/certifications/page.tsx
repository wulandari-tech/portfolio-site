import Certification from "@/components/Certification";
import ComponentList from "@/components/ComponentList";
import { certifications } from "@/data/certifications";

export default function CertificationsPage() {
    return (
        <ol>
            <ComponentList dataList={certifications.map(certification => ({certification}))} ListedComponent={Certification}/>
        </ol>
    );
}
