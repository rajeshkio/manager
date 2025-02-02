import { Injectable } from '@angular/core';
import { AssetsHttpService } from '@common/api/assets-http.service';
import { AuthHttpService } from '@common/api/auth-http.service';
import { ConfigHttpService } from '@common/api/config-http.service';
import {
  ConfigPatch,
  ConfigDebug,
  DebugPostBody,
  RenewLicensePostBody,
  ServerPatchBody,
  Self,
  User,
  Role,
  PasswordProfile,
  PolicyMode,
} from '@common/types';

@Injectable()
export class SettingsService {
  constructor(
    private assetsHttpService: AssetsHttpService,
    private authHttpService: AuthHttpService,
    private configHttpService: ConfigHttpService
  ) {}

  getLicense() {
    return this.authHttpService.getLicense();
  }

  renewLicense(body: RenewLicensePostBody) {
    return this.authHttpService.postLicense(body);
  }

  getSelf() {
    return this.authHttpService.getSelf();
  }

  patchSelf(user: Self) {
    return this.authHttpService.patchSelf(user);
  }

  getConfig() {
    return this.configHttpService.getConfig();
  }

  patchConfig(body: ConfigPatch) {
    return this.configHttpService.patchConfig(body);
  }

  patchConfigDebug(body: ConfigDebug) {
    return this.configHttpService.patchConfigAny({
      config_v2: { misc_cfg: body },
    });
  }

  patchConfigServiceMode(body: { new_service_policy_mode: PolicyMode }) {
    return this.configHttpService.patchConfigAny({
      config_v2: { svc_cfg: body },
    });
  }

  getIBMSetup() {
    return this.configHttpService.getIBMSetup();
  }

  getSystemConfig(exportMode) {
    return this.configHttpService.getSystemConfig(exportMode);
  }

  getServer() {
    return this.authHttpService.getServer();
  }

  patchServer(body: ServerPatchBody) {
    return this.authHttpService.patchServer(body);
  }

  postServer(body: ServerPatchBody) {
    return this.authHttpService.postServer(body);
  }

  getDomain() {
    return this.assetsHttpService.getDomain();
  }

  postDebug(body: DebugPostBody) {
    return this.configHttpService.postDebug(body);
  }

  getUsers() {
    return this.authHttpService.getUsers();
  }

  deleteUser(id: string) {
    return this.authHttpService.deleteUser(id);
  }

  addUser(
    user: Omit<
      User,
      'blocked_for_failed_login' | 'blocked_for_password_expired' | 'emailHash'
    >
  ) {
    return this.authHttpService.addUser(user);
  }

  patchUser(user: User) {
    return this.authHttpService.patchUser(user);
  }

  getPermissionOptions() {
    return this.authHttpService.getPermissionOptions();
  }

  getRoles() {
    return this.authHttpService.getRoles();
  }

  deleteRole(id: string) {
    return this.authHttpService.deleteRole(id);
  }

  addRole(role: Role) {
    return this.authHttpService.addRole(role);
  }

  patchRole(role: Role) {
    return this.authHttpService.patchRole(role);
  }

  getPwdProfile() {
    return this.authHttpService.getPwdProfile();
  }

  getPublicPwdProfile() {
    return this.authHttpService.getPublicPwdProfile();
  }

  patchPwdProfile(profile: PasswordProfile) {
    return this.authHttpService.patchPwdProfile(profile);
  }

  getCspSupport() {
    return this.configHttpService.getCspSupport();
  }
}
