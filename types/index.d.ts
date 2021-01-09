declare module '@freeclimb/sdk' {
  export namespace FreeClimb {
    namespace API {

      export interface IncomingNumber {
        uri: string
        dateCreated: string
        dateUpdated: string
        revision: number
        phoneNumberId: string
        accountId: string
        applicationId: string
        phoneNumber: string
        alias: string
        region: string
        country: string
        voiceEnabled: boolean
        smsEnabled: boolean
      }

      export interface AvailableNumber {
        phoneNumber: string
        voiceEnabled: boolean
        smsEnabled: boolean
        alias: string
        region: string
        country: string
      }

      export interface Application {
        uri: string
        dateCreated: string
        dateUpdated: string
        revision: number
        applicationId: string
        accountId: string
        alias: string
        voiceUrl: string
        voiceFallbackUrl: string
        callConnectUrl: string
        statusCallbackUrl: string
        smsUrl: string
        smsFallbackUrl: string
      }

      export interface Call {
        uri: string
        revision: number
        dateCreated: string
        dateUpdated: string
        callId: string
        parentCallId: string
        accountId: string
        from: string
        to: string
        phoneNumberId: string
        status: string
        startTime: string
        connectTime: string
        endTime: string
        duration: number
        connectDuration: number
        direction: string
        answeredBy: string
        subresourceUris: {
          logs: string
          recordings: string
        }
      }

      export interface CallsListPage {
        total: number
        start: number
        end: number
        page: number
        numPages: number
        pageSize: number
        nextPageUri: string | null
        calls: [Call]
      }

      export interface Client {
        applications: {
          get: (applicationId: string) => Promise<Application>
          create: (options?: {
            alias?: string,
            voiceUrl?: string,
            voiceFallbackUrl?: string,
            callConnectUrl?: string,
            statusCallbackUrl?: string,
            smsUrl?: string,
            smsFallbackUrl?: string
          }) => Promise<Application>
        }
        availableNumbers: {
          getList: (filter: { phoneNumber?: string }) => Promise<{ availablePhoneNumbers: [AvailableNumber] }>
        }
        calls: {
          getList: (params?: {
            to?: string,
            from?: string
            status?: string
            startTime?: string
            endTime?: string
            parentCallId?: string
          }) => Promise<CallsListPage>
          getNextPage: (uri: string) => Promise<CallsListPage>
        }
        incomingNumbers: {
          get: (phoneNumberId: string) => Promise<IncomingNumber>
          purchase: (phoneNumber: string) => Promise<IncomingNumber>
          update: (fcNumberId: string, { applicationId } : { applicationId: string }) => Promise<IncomingNumber>
          delete: (fcNumberId: string) => Promise<boolean>
        }
      }
    }
    export interface ENUMS {}
  }

  export namespace PerCL {
    export interface OutDialCommand {
      "OutDial" : {
        actionUrl: string,
        callConnectUrl: string
        callingNumber: string
        destination: string
        ifMachine?: string
        ifMachineUrl?: string
        sendDigits?: string
        statusCallbackUrl?: string
        timeout?: number
        privacyMode?: boolean
      }
    }

    export interface OutDialCommandOptions {
      ifMachine?: string
      ifMachineUrl?: string
      sendDigits?: string
      statusCallbackUrl?: string
      timeout?: number
      privacyMode?: boolean
    }

    export interface HangupCommand {
      "Hangup": {
        reason?: string
      }
    }

    export interface HangupOptions {
      reason?: string
    }

    export interface PauseCommand {
      "Pause" : {
        length: number
      }
    }

    export interface RedirectCommand {
      "Redirect": {
        actionUrl: string
      }
    }

    export interface SendDigitsCommand {
      "SendDigits" : {
        digits: string
        pauseMs?: number
        privacyMode?: boolean
      }
    }

    export interface SendDigitsOptions {
      pauseMs?: number
      privacyMode?: boolean
    }

    export interface CreateConferenceCommand {
      "CreateConference": {
        actionUrl: string
        statusCallbackUrl?: string
        alias?: string
        playBeep?: boolean
        record?: boolean
        waitUrl?: string
      }
    }

    export interface CreateConferenceOptions {
      statusCallbackUrl?: string
      alias?: string
      playBeep?: boolean
      record?: boolean
      waitUrl?: string
    }

    export interface TerminateConferenceCommand {
      "TerminateConference": {
        conferenceId: string
      }
    }

    export interface AddToConferenceCommand {
      "AddToConferenceCommand": {
        conferenceId: string
        callId: string
        startConfOnEnter?: boolean
        talk?: boolean
        listen?: boolean
        allowCallControl?: boolean
        callControlSequence?: string
        callControlUrl?: string
        leaveConferenceUrl?: string
        notificationUrl?: string
      }
    }

    export interface AddToConferenceOptions {
      startConfOnEnter?: boolean
      talk?: boolean
      listen?: boolean
      allowCallControl?: boolean
      callControlSequence?: string
      callControlUrl?: string
      leaveConferenceUrl?: string
      notificationUrl?: string
    }

    export interface RemoveFromConferenceCommand {
      "RemoveFromConference": {
        callId: string
      }
    }

    export interface SetListenCommand {
      "SetListen": {
        callId: string
        listen: boolean
      }
    }

    export interface SetTalkCommand {
      "SetTalk": {
        callId: string
        talk: boolean
      }
    }

    export interface EnqueueCommand {
      "Enqueue": {
        queueId: string
        actionUrl: string
        waitUrl: string
        notificatonUrl?: string
      }
    }

    export interface DequeueCommand {
      "Dequeue": {}
    }

    export interface RecordUtteranceCommand {
      "RecordUtterance": {
        actionUrl: string
        silenceTimeoutMs?: number
        finishOnKey?: string
        maxLengthSec?: number
        playBeep?: boolean
        autoStart?: boolean
      }
    }

    export interface StartRecordCallCommand {
      "StartRecordCall": {}
    }

    export interface RecordUtteranceOptions{
      silenceTimeoutMs?: number
      finishOnKey?: string
      maxLengthSec?: number
      playBeep?: boolean
      autoStart?: boolean
    }

    export interface PlayCommand {
      "Play": {
        file: string
        loop?: number
        privacyMode?: boolean
      }
    }

    export interface PlayOptions {
      loop?: number
      privacyMode?: boolean
    }

    export interface PlayEarlyMediaCommand {
      "PlayEarlyMedia": {
        file: string
      }
    }

    export type SayLanguageValue=
      "ca-ES" |
      "da-DK" |
      "de-DE" |
      "en-AU" |
      "en-CA" |
      "en-GB" |
      "en-IN" |
      "en-US" |
      "es-ES" |
      "es-MX" |
      "fi-FI" |
      "fr-CA" |
      "fr-FR" |
      "it-IT" |
      "ja-JP" |
      "ko-KR" |
      "nb-NO" |
      "nl-NL" |
      "pl-PL" |
      "pt-BR" |
      "pt-PT" |
      "ru-RU" |
      "sv-SE" |
      "zh-CN" |
      "zh-HK" |
      "zh-TW"

    export interface SayCommand {
      "Say": {
        text: string
        loop?: number
        language?: SayLanguageValue
        privacyMode?: boolean
      }
    }

    export interface SayOptions {
      loop?: number
      language?: SayLanguageValue
      privacyMode?: boolean
    }

    export type NestableCommand = PlayCommand | SayCommand | PauseCommand

    export interface GetDigitsCommand {
      "GetDigits": {
        actionUrl: string
        initialTimeoutMs?: number
        digitTimeoutMs?: number
        finishOnKey?: string
        minDigits?: number
        maxDigits?: number
        flushBuffer?: boolean
        prompts?: NestableCommand[]
        privacyMode?: boolean
      }
    }

    export interface GetDigitsOptions {
      initialTimeoutMs?: number
      digitTimeoutMs?: number
      finishOnKey?: string
      minDigits?: number
      maxDigits?: number
      flushBuffer?: boolean
      prompts?: NestableCommand[]
      privacyMode?: boolean
    }

    export interface GetSpeechCommand {
      "GetSpeech": {
        actionUrl: string
        grammerFile: string
        grammarType?: "URL" | "BUILTIN"
        grammarRule?: string
        playBeep?: boolean
        prompts?: NestableCommand[]
        noInputTimoutMs?: number
        recognitionTimeoutMs?: number
        confidenceThreshold?: number
        sensitivityLevel?: number
        speechCompleteTimeoutMs?: number
        speechIncompleteTimeoutMs?: number
        privacyMode?: boolean
      }
    }

    export interface GetSpeechOptions {
      grammarType?: "URL" | "BUILTIN"
      grammarRule?: string
      playBeep?: boolean
      prompts?: NestableCommand[]
      noInputTimoutMs?: number
      recognitionTimeoutMs?: number
      confidenceThreshold?: number
      sensitivityLevel?: number
      speechCompleteTimeoutMs?: number
      speechIncompleteTimeoutMs?: number
      privacyMode?: boolean
    }

    export interface SmsCommand {
      "Sms": {
        to: string
        from: string
        text: string
        notificationUrl?: string
      }
    }

    export interface SmsOptions {
      notificatioUrl?: string
    }

    export interface RejectCommand {
      "Reject" : {
        reason: string
      }
    }

    export type Command =
    OutDialCommand |
    HangupCommand |
    PauseCommand |
    RedirectCommand |
    SendDigitsCommand |
    CreateConferenceCommand |
    TerminateConferenceCommand |
    AddToConferenceCommand |
    RemoveFromConferenceCommand |
    SetListenCommand |
    SetTalkCommand |
    EnqueueCommand |
    DequeueCommand |
    RecordUtteranceCommand |
    StartRecordCallCommand |
    PlayCommand |
    PlayEarlyMediaCommand |
    SayCommand |
    GetDigitsCommand |
    GetSpeechCommand |
    SmsCommand |
    RejectCommand

    export interface Builders {
      outdial(to: string, from: string, actionUrl: string, callConnectUrl: string, options?: OutDialCommandOptions): OutDialCommand
      hangup(options?: HangupOptions): HangupCommand
      pause(length: number): PauseCommand
      redirect(actionUrl: string): RedirectCommand
      sendDigits(digits: string, options?: SendDigitsOptions): SendDigitsCommand
      createConference(actionUrl: string, options?: CreateConferenceOptions): CreateConferenceCommand
      terminateConference(conferenceId: string): TerminateConferenceCommand
      addToConference(conferenceId: string, callId: string, options?: AddToConferenceOptions): AddToConferenceCommand
      removeFromConference(callId: string): RemoveFromConferenceCommand
      setListen(callId: string, listen?: boolean): SetListenCommand
      setTalk(callId: string, talk?: boolean): SetTalkCommand
      enqueue(queueId: string, actionUrl: string, waitUrl: string, notificationUrl?: string): EnqueueCommand
      dequeue(): DequeueCommand
      recordUtterance(actionUrl: string, options?: RecordUtteranceOptions): RecordUtteranceCommand
      startRecordCall(): StartRecordCallCommand
      play(file: string, options?: PlayOptions):  PlayCommand
      playEarlyMedia(file: string): PlayEarlyMediaCommand
      say(text: string, options?: SayOptions): SayCommand
      getDigits(actionUrl: string, options?: GetDigitsOptions): GetDigitsCommand
      getSpeech(actionUrl: string, grammerFile: string, options?: GetSpeechOptions): GetSpeechCommand
      sms(to: string, from: string, text: string, options?: SmsOptions): SmsCommand
      reject(reason: string): RejectCommand
      build(...scripts: Command[]): Command[]
    }
  }

  export namespace FreeClimbRequests {
    export interface InboundCallRequest {
      body: InboundCallRequestBody
    }

    export interface InboundCallRequestBody {
      requstType: string
      callId: string
      accountId: string
      from: string
      to: string
      callStatus: string
      direction: string
      conferenceId: string
      queueId: string
      reason: string
      parentCallId: string
    }

    export interface GetDigitsRequest {
      body: GetDigitsRequestBody
    }

    export interface GetDigitsRequestBody extends InboundCallRequestBody {
      digits: string
    }
  }

  export interface FreeClimbSDK {
    api: FreeClimb.API.Client
    percl: PerCL.Builders
    enums: FreeClimb.ENUMS
  }

  function freeClimbSDK(accountId: string, authToken: string): FreeClimbSDK
  export default freeClimbSDK
}
