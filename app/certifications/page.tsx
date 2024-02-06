import Certification from "@/components/Certification";
import List from "@/components/List";
import { certifications } from "@/data/certifications";

export default function CertificationsPage() {
    return (
        <ol>
            <List dataList={certifications.map(certification => ({certification}))} ListedComponent={Certification}/>
        </ol>
    );
}
