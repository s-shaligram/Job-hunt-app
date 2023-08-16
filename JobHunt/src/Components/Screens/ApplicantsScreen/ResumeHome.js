import React from "react";
import {ScrollView} from "react-native";
import SelectionTile from "../SelectionTile/selectiontile";

function ApplicantsHome({navigation}) {
    return (
        <ScrollView style={{backgroundColor: "white"}}>
            <SelectionTile
                name={"📜 Applicant 01"}
                routeTo={"ViewApplicant"}
                navigation={navigation}
            />
            <SelectionTile
                name={"📜 Applicant 02"}
                routeTo={"ViewApplicant"}
                navigation={navigation}
            />
        </ScrollView>
    );
}

export default ApplicantsHome;
