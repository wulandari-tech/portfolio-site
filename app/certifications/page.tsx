import Certification from "@/components/Certification";
import List from "@/components/List";
import { certifications } from "@/data/certifications";

export default function CertificationsPage() {
    return (
        <List dataList={certifications.map(certification => ({certification}))} ListedComponent={Certification}/>
    );
}
