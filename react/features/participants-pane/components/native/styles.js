import BaseTheme from '../../../base/ui/components/BaseTheme.native';

/**
 * The style for participant states.
 */
const participantState = {
    display: 'flex',
    justifyContent: 'center'
};

/**
 * The style for participant list.
 */
const participantList = {
    marginLeft: BaseTheme.spacing[4],
    marginRight: BaseTheme.spacing[4],
    position: 'relative'
};

/**
 * The style for participant list description.
 */
const participantListDescription = {
    color: BaseTheme.palette.text01,
    paddingBottom: BaseTheme.spacing[3],
    paddingTop: BaseTheme.spacing[3],
    position: 'relative',
    width: '55%'
};

/**
 * The style for content.
 */
const flexContent = {
    alignItems: 'center',
    color: BaseTheme.palette.icon01,
    display: 'flex',
    flex: 1
};

/**
 * The style of the participants pane buttons.
 */
const button = {
    alignItems: 'center',
    backgroundColor: BaseTheme.palette.action02,
    borderRadius: BaseTheme.shape.borderRadius,
    display: 'flex',
    height: BaseTheme.spacing[7],
    justifyContent: 'center',
    marginLeft: 'auto'
};

/**
 * Small buttons.
 */
const smallButton = {
    ...button,
    width: BaseTheme.spacing[7]
};

/**
 * The style of the participants pane buttons description.
 */
const buttonContent = {
    ...BaseTheme.typography.labelButton,
    ...flexContent,
    color: BaseTheme.palette.text01,
    justifyContent: 'center'
};

/**
 * The styles of the native components of the feature {@code participants}.
 */
export default {

    lobbyParticipantItem: {
        flexDirection: 'row',
        position: 'absolute',
        right: 0,
        zIndex: 1
    },

    participantActionsButtonAdmit: {
        backgroundColor: BaseTheme.palette.action01,
        borderRadius: BaseTheme.shape.borderRadius,
        height: BaseTheme.spacing[5]
    },

    participantActionsButtonReject: {
        backgroundColor: BaseTheme.palette.action01,
        borderRadius: BaseTheme.shape.borderRadius,
        height: BaseTheme.spacing[5]
    },

    participantActionsButtonContent: {
        alignItems: 'center',
        display: 'flex',
        height: BaseTheme.spacing[5]
    },

    participantActionsButtonText: {
        color: BaseTheme.palette.text01,
        textTransform: 'capitalize'
    },

    allParticipantActionsButton: {
        ...BaseTheme.typography.labelRegular,
        color: BaseTheme.palette.action01,
        textTransform: 'capitalize'

    },

    participantContainer: {
        alignItems: 'center',
        borderBottomColor: BaseTheme.palette.field01Hover,
        borderBottomWidth: 2,
        display: 'flex',
        flexDirection: 'row',
        height: BaseTheme.spacing[9],
        width: '100%'
    },

    participantContent: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        overflow: 'hidden',
        width: '100%'
    },

    participantNameContainer: {
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        paddingLeft: BaseTheme.spacing[2],
        width: '63%'
    },

    participantName: {
        overflow: 'hidden',
        color: BaseTheme.palette.text01
    },

    isLocal: {
        color: BaseTheme.palette.text01
    },

    participantsPane: {
        backgroundColor: BaseTheme.palette.ui01
    },

    participantStatesContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: BaseTheme.spacing[3]
    },

    participantStateAudio: {
        ...participantState
    },

    participantStateVideo: {
        ...participantState,
        paddingRight: BaseTheme.spacing[2]
    },

    raisedHandIndicator: {
        backgroundColor: BaseTheme.palette.warning02,
        borderRadius: BaseTheme.shape.borderRadius / 2,
        height: BaseTheme.spacing[4],
        marginRight: BaseTheme.spacing[2],
        width: BaseTheme.spacing[4]
    },

    raisedHandIcon: {
        ...flexContent,
        top: BaseTheme.spacing[1]
    },
    lobbyList: {
        ...participantList
    },

    meetingList: {
        ...participantList,
        marginTop: BaseTheme.spacing[3]
    },

    lobbyListDetails: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        position: 'relative',
        width: '100%'
    },

    lobbyListDescription: {
        ...participantListDescription
    },

    meetingListDescription: {
        ...participantListDescription
    },

    lobbyListActions: {
        flexDirection: 'row',
        right: BaseTheme.spacing[2]
    },

    header: {
        alignItems: 'center',
        backgroundColor: BaseTheme.palette.ui01,
        top: BaseTheme.spacing[0],
        display: 'flex',
        flexDirection: 'row',
        height: BaseTheme.spacing[10],
        paddingRight: BaseTheme.spacing[3],
        position: 'relative',
        right: BaseTheme.spacing[0],
        left: BaseTheme.spacing[0]
    },

    footer: {
        alignItems: 'center',
        backgroundColor: BaseTheme.palette.ui01,
        bottom: BaseTheme.spacing[0],
        display: 'flex',
        flexDirection: 'row',
        height: BaseTheme.spacing[10],
        paddingRight: BaseTheme.spacing[3],
        position: 'relative',
        right: BaseTheme.spacing[0],
        left: BaseTheme.spacing[0]
    },

    closeButton: {
        ...smallButton
    },

    closeIcon: {
        ...buttonContent,
        left: BaseTheme.spacing[2]
    },

    moreButton: {
        ...smallButton
    },

    inviteButton: {
        backgroundColor: BaseTheme.palette.action01,
        marginTop: BaseTheme.spacing[2]
    },

    inviteLabel: {
        ...BaseTheme.typography.labelButtonLarge,
        textTransform: 'capitalize'
    },

    moreIcon: {
        ...buttonContent,
        left: BaseTheme.spacing[2]
    },

    muteAllButton: {
        ...button,
        left: BaseTheme.spacing[10] + BaseTheme.spacing[2]
    },

    muteAllContent: {
        ...buttonContent
    },

    muteAllLabel: {
        color: BaseTheme.palette.text01,
        textTransform: 'capitalize'
    }
};
