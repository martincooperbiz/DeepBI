import React from "react";
import Form from "antd/lib/form";
import Checkbox from "antd/lib/checkbox";
import Skeleton from "antd/lib/skeleton";
import HelpTrigger from "@/components/HelpTrigger";
import DynamicComponent from "@/components/DynamicComponent";
import { SettingsEditorPropTypes, SettingsEditorDefaultProps } from "../prop-types";

export default function BeaconConsentSettings(props) {
  const { values, onChange, loading } = props;

  return (
    <DynamicComponent name="OrganizationSettings.BeaconConsentSettings" {...props}>
      <Form.Item
        label={
          <span>
            {window.W_L.help_share_anonymous_data}
            <HelpTrigger className="m-l-5 m-r-5" type="USAGE_DATA_SHARING" />
          </span>
        }>
        {loading ? (
          <Skeleton title={{ width: 300 }} paragraph={false} active />
        ) : (
          <Checkbox
            name="beacon_consent"
            checked={values.beacon_consent}
            onChange={e => onChange({ beacon_consent: e.target.checked })}>
            {window.W_L.help_redash_improve_tip}
          </Checkbox>
        )}
      </Form.Item>
    </DynamicComponent>
  );
}

BeaconConsentSettings.propTypes = SettingsEditorPropTypes;

BeaconConsentSettings.defaultProps = SettingsEditorDefaultProps;
