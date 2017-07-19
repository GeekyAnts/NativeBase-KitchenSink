/* @flow */

import React from "react";

import { Platform } from "react-native";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";

import Drawer from "./Drawer";
import Header from "./components/Header/";
import Header1 from "./components/Header/1";
import Header2 from "./components/Header/2";
import Header3 from "./components/Header/3";
import Header4 from "./components/Header/4";
import Header5 from "./components/Header/5";
import Header6 from "./components/Header/6";
import Header7 from "./components/Header/7";
import Header8 from "./components/Header/8";
import BasicFooter from "./components/footer/basicFooter";
import IconFooter from "./components/footer/iconFooter";
import IconText from "./components/footer/iconText";
import BadgeFooter from "./components/footer/badgeFooter";
import Default from "./components/button/default";
import Outline from "./components/button/outline";
import Rounded from "./components/button/rounded";
import Block from "./components/button/block";
import Full from "./components/button/full";
import Custom from "./components/button/custom";
import Transparent from "./components/button/transparent";
import IconBtn from "./components/button/iconBtn";
import Disabled from "./components/button/disabled";
import BasicCard from "./components/card/basic";
import NHCardImage from "./components/card/card-image";
import NHCardShowcase from "./components/card/card-showcase";
import NHCardList from "./components/card/card-list";
import NHCardHeaderAndFooter from "./components/card/card-header-and-footer";
import BasicFab from "./components/fab/basic";
import MultipleFab from "./components/fab/multiple";
import FixedLabel from "./components/form/fixedLabel";
import InlineLabel from "./components/form/inlineLabel";
import FloatingLabel from "./components/form/floatingLabel";
import PlaceholderLabel from "./components/form/placeholder";
import StackedLabel from "./components/form/stacked";
import RegularInput from "./components/inputgroup/regular";
import UnderlineInput from "./components/inputgroup/underline";
import RoundedInput from "./components/inputgroup/rounded";
import IconInput from "./components/inputgroup/iconInput";
import SuccessInput from "./components/inputgroup/success";
import ErrorInput from "./components/inputgroup/error";
import DisabledInput from "./components/inputgroup/disabledInput";
import RowNB from "./components/layout/row";
import ColumnNB from "./components/layout/column";
import NestedGrid from "./components/layout/nested";
import CustomRow from "./components/layout/customRow";
import CustomCol from "./components/layout/customCol";
import BasicListSwipe from "./components/listSwipe/basic-list-swipe";
import MultiListSwipe from "./components/listSwipe/multi-list-swipe";
import NHBasicList from "./components/list/basic-list";
import NHListDivider from "./components/list/list-divider";
import NHListSeparator from "./components/list/list-separator";
import NHListHeader from "./components/list/list-headers";
import NHListIcon from "./components/list/list-icon";
import NHListAvatar from "./components/list/list-avatar";
import NHListThumbnail from "./components/list/list-thumbnail";
import RegularPicker from "./components/picker/regularPicker";
import PlaceholderPicker from "./components/picker/placeholderPicker";
import PlaceholderPickerNote from "./components/picker/placeholderPickernote";
import BackButtonPicker from "./components/picker/backButtonPicker";
import HeaderPicker from "./components/picker/headerPicker";
import HeaderStylePicker from "./components/picker/headerStylePicker";
import CustomHeaderPicker from "./components/picker/customHeaderPicker";
import BasicTab from "./components/tab/basicTab";
import ConfigTab from "./components/tab/configTab";
import ScrollableTab from "./components/tab/scrollableTab";
import BasicSegment from "./components/segment/SegmentHeader";
import RegularActionSheet from "./components/actionsheet/regular";
import IconActionSheet from "./components/actionsheet/icon";
import AdvSegment from "./components/segment/segmentTab";
import SimpleDeck from "./components/deckswiper/simple";
import AdvancedDeck from "./components/deckswiper/advanced";

const AppNavigator = StackNavigator(
    {
        Drawer: { screen: Drawer },

        Header1: { screen: Header1 },
        Header2: { screen: Header2 },
        Header3: { screen: Header3 },
        Header4: { screen: Header4 },
        Header5: { screen: Header5 },
        Header6: { screen: Header6 },
        Header7: { screen: Header7 },
        Header8: { screen: Header8 },

        BasicFooter: { screen: BasicFooter },
        IconFooter: { screen: IconFooter },
        IconText: { screen: IconText },
        BadgeFooter: { screen: BadgeFooter },

        Default: { screen: Default },
        Outline: { screen: Outline },
        Rounded: { screen: Rounded },
        Block: { screen: Block },
        Full: { screen: Full },
        Custom: { screen: Custom },
        Transparent: { screen: Transparent },
        IconBtn: { screen: IconBtn },
        Disabled: { screen: Disabled },

        BasicCard: { screen: BasicCard },
        NHCardImage: { screen: NHCardImage },
        NHCardShowcase: { screen: NHCardShowcase },
        NHCardList: { screen: NHCardList },
        NHCardHeaderAndFooter: { screen: NHCardHeaderAndFooter },

        SimpleDeck: { screen: SimpleDeck },
        AdvancedDeck: { screen: AdvancedDeck },

        BasicFab: { screen: BasicFab },
        MultipleFab: { screen: MultipleFab },

        FixedLabel: { screen: FixedLabel },
        InlineLabel: { screen: InlineLabel },
        FloatingLabel: { screen: FloatingLabel },
        PlaceholderLabel: { screen: PlaceholderLabel },
        StackedLabel: { screen: StackedLabel },
        RegularInput: { screen: RegularInput },
        UnderlineInput: { screen: UnderlineInput },
        RoundedInput: { screen: RoundedInput },
        IconInput: { screen: IconInput },
        SuccessInput: { screen: SuccessInput },
        ErrorInput: { screen: ErrorInput },
        DisabledInput: { screen: DisabledInput },

        RowNB: { screen: RowNB },
        ColumnNB: { screen: ColumnNB },
        NestedGrid: { screen: NestedGrid },
        CustomRow: { screen: CustomRow },
        CustomCol: { screen: CustomCol },

        NHBasicList: { screen: NHBasicList },
        NHListDivider: { screen: NHListDivider },
        NHListSeparator: { screen: NHListSeparator },
        NHListHeader: { screen: NHListHeader },
        NHListIcon: { screen: NHListIcon },
        NHListAvatar: { screen: NHListAvatar },
        NHListThumbnail: { screen: NHListThumbnail },

        BasicListSwipe: { screen: BasicListSwipe },
        MultiListSwipe: { screen: MultiListSwipe },

        RegularPicker: { screen: RegularPicker },
        PlaceholderPicker: { screen: PlaceholderPicker },
        PlaceholderPickerNote: { screen: PlaceholderPickerNote },
        BackButtonPicker: { screen: BackButtonPicker },
        HeaderPicker: { screen: HeaderPicker },
        HeaderStylePicker: { screen: HeaderStylePicker },
        CustomHeaderPicker: { screen: CustomHeaderPicker },

        BasicTab: { screen: BasicTab },
        ConfigTab: { screen: ConfigTab },
        ScrollableTab: { screen: ScrollableTab },

        BasicSegment: { screen: BasicSegment },
        AdvSegment: { screen: AdvSegment },

        RegularActionSheet: { screen: RegularActionSheet },
        IconActionSheet: { screen: IconActionSheet },
    },
    {
        initialRouteName: "Drawer",
        headerMode: "none",
    }
);

export default () =>
    <Root>
        <AppNavigator />
    </Root>;
