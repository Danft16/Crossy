import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

export default function Index() {
    return (
        <div
            style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <CrossmintPayButton clientId="058eeac7-3751-4c66-afc3-f77270c9d636" />
        </div>
    );
}
